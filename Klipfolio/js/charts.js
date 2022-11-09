var chart = document.getElementById('aquisition');
var aquisition = new Chart(chart, {
   type: 'line',
   data: {
   	labels: ["One", "Two", "Three", "Four", "five"],
   	datasets: [{
      	label: "Lost",
      	lineTension: 0,
      	borderColor: '#4B57C5',
      	borderWidth: 2,
      	showLine: true,
      	data: [0, 12, 16, 7, 5],
      	backgroundColor: 'transparent',
			pointRadius: 0,
   	}, 
		{
      	label: "Lost",
      	lineTension: 0,
      	borderColor: '#00805D',
      	borderWidth: 2,
      	data: [0, 7, 6, 15, 14],
      	backgroundColor: 'transparent',
			pointRadius: 0,
   	},
   	{
   		label: "Lost",
   		lineTension: 0,
   		borderColor: '#18AED8',
   		borderWidth: 2,
   		data: [0, 3, 2, 6, 15],
   		backgroundColor: 'transparent',
			pointRadius: 0,
   	},
   	]
  	},
  	options: {
		datasets: {
			line: {
			 	pointRadius: 0 // disable for all `'line'` datasets
			}
  		},
  		elements: {
			point: {
			 	radius: 0 // default to disabled in all datasets
			}
  		},
		plugins: {
			legend: {
				display: false,
			 	labels: {
				  	font: {
						size: 0
				  	}
			 	},
			},
  		},
    	scales: {
      	yAxes: [{
        		gridLines: {
          		drawBorder: false
        		},
        		ticks: {
					
          		stepSize: 12
        		}
      		}],
			y: {
         	beginAtZero: true,
				ticks: {
					display: false,
				},
				grid: {
					drawTicks: false,
					drawBorder: false,
				}
         },
      	xAxes: [{
        		gridLines: {
          		display: false,
        		},
      	}],
			x: {
				display: false,
         	beginAtZero: true,
				ticks: {
					display: false,
				},
				grid: {
					drawTicks: false,
					drawBorder: false,
				}
         },
    	}
  	}
})