const activeclientchart = () => {
    const ctx = document.getElementById('activeClientsChart').getContext('2d');

    const labels = ['2016-17', '2017-18', '2018-19', '2019-20', '2020-21', '2021-22', '2022-23', '2023-24'];
    const angelOneData = [4, 4, 5, 6, 8, 18, 44, 50];
    const zerodhaData = [1, 2, 7, 12, 21, 48, 74, 79];

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Angel One',
                    data: angelOneData,
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    tension: 0.4,
                },
                {
                    label: 'Zerodha',
                    data: zerodhaData,
                    borderColor: 'rgb(54, 162, 235)',
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    tension: 0.4,
                }
            ]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 81,
                    ticks: {
                        stepSize: 3,
                    },
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                },
                legend: {
                    labels: {
                        usePointStyle: true,
                    },
                    position: 'bottom'
                }
            }
        }
    });
}

// Wait for the DOM to be fully loaded before executing the chart function
document.addEventListener('DOMContentLoaded', activeclientchart);




const complaintschart = () => {
    const ctx = document.getElementById('ComplaintsChart').getContext('2d');

    const labels = ['2016-17', '2017-18', '2018-19', '2019-20', '2020-21', '2021-22', '2022-23', '2023-24'];
    const angelOneData = [220, 310, 370, 340, 290, 1390, 1340, 510];
    const zerodhaData = [20, 80, 320, 320, 460, 920, 560, 360];

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Angel One',
                    data: angelOneData,
                    borderColor: 'rgb(255, 159, 64)',
                    backgroundColor: 'rgba(255, 159, 64, 0.5)',
                    tension: 0.4,
                },
                {
                    label: 'Zerodha',
                    data: zerodhaData,
                    borderColor: 'rgb(54, 162, 235)',
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    tension: 0.4,
                }
            ]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 1800,
                    ticks: {
                        stepSize: 200,
                    },
                },
            },
            plugins: {
                title: {
                    display: true,
                },
                legend: {
                    labels: {
                        usePointStyle: true,
                    },
                    position: 'bottom'
                }

            }
        }
    });
}
document.addEventListener('DOMContentLoaded', complaintschart);








const shareHoldingChart = () => {
    const ctx = document.getElementById('ShareHolding_AngleOne').getContext('2d');

    const labels = ['', '', '', '', ''];
    const data = [42.5, 27.2, 9.7, 7.7, 6.5];

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: [
                    'rgba(255, 159, 64, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 159, 64, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 159, 64, 0.8)'
                ],
                borderRadius: 20,
                borderSkipped: false,
            }]
        },
        options: {
            maintainAspectRatio: false,
            barPercentage: 0.3,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 45,
                    ticks: {
                        stepSize: 5
                    },
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Angle One',
                    position: 'bottom',
                    font: {
                        size: 16,
                        weight: 'bold'
                    },
                }
            }
        }
    });
}
document.addEventListener('DOMContentLoaded', shareHoldingChart);




const shareHoldingZerodhaChart = () => {
    const ctx = document.getElementById('ShareHolding_Zerodha').getContext('2d');

    const labels = ['', '', '', '', ''];
    const data = [30.1, 27.8, 26.7, 9.1, 0.7];

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: [
                    'rgba(255, 159, 64, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 159, 64, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 159, 64, 0.8)'
                ],
                borderRadius: 20,
                borderSkipped: false,
            }]
        },
        options: {
            maintainAspectRatio: false,
            barPercentage: 0.3,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 35,
                    ticks: {
                        stepSize: 5
                    },
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Zerodha',
                    position: 'bottom',
                    font: {
                        size: 16,
                        weight: 'bold'
                    },
                }
            },
        }
    });
}
document.addEventListener('DOMContentLoaded', shareHoldingZerodhaChart);




// financial chart
const financialsChart = () => {
    const ctx = document.getElementById('financials_chart').getContext('2d')

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Revenue', 'Profit/Loss'],
            datasets: [
                {
                    label: 'Zerodha - 2019-20',
                    data: [659, 350],
                    backgroundColor: 'rgba(54, 162, 235, 1)',
                    borderRadius: 20,
                    borderSkipped: false,
                },
                {
                    label: 'Angel One - 2020-21',
                    data: [2180.9, 296.9],
                    backgroundColor: 'rgba(255, 159, 64, 1)',
                    borderRadius: 20,
                    borderSkipped: false,
                },
                {
                    label: 'Zerodha - 2020-21',
                    data: [2729, 1122],
                    backgroundColor: 'rgba(54, 162, 235, 0.9)',
                    borderRadius: 20,
                    borderSkipped: false,
                },
                {
                    label: 'Angel One - 2021-22',
                    data: [2887.68, 625.22],
                    backgroundColor: 'rgba(255, 159, 64, 0.9)',
                    borderRadius: 20,
                    borderSkipped: false,
                },
                {
                    label: 'Zerodha - 2021-22',
                    data: [4625, 2094],
                    backgroundColor: 'rgba(54, 162, 235, 0.85)',
                    borderRadius: 20,
                    borderSkipped: false,
                },
                {
                    label: 'Angel One - 2022-23',
                    data: [2912.93, 895.05],
                    backgroundColor: 'rgba(255, 159, 64, 0.85)',
                    borderRadius: 20,
                    borderSkipped: false,
                },
            ],
        },
        options: {
            maintainAspectRatio: false,
            responsive: true,
            barPercentage: 0.5,
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    beginAtZero: true,
                    max: 5000,
                    ticks: {
                        stepSize: 500
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                    },
                    font: {
                        weight: 'bold'
                    },
                }
            }
        }
    });

}

document.addEventListener('DOMContentLoaded', financialsChart);