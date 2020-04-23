
window.onload = function() {

 // You might want to remove this line if you are not planning on using it.







var dataPoints = [];

var options =  {
	animationEnabled: true,
	backgroundColor:"#AFDEF5",

	title: {
		text: "Confirm Cases In India"
	},
	axisX: {
		valueFormatString: "DD/MM",
		
	},
	axisY2: {
		
		includeZero: false
	},
	data: [{
		type: "line", 
		yValueFormatString: "#,###.##",
		axisYType:"secondary",
		markerType:"circle",
		markerSize:5,
		markerColor:" #23AAE9",
		markerBorderThickness:2,
		dataPoints: dataPoints
	}]
};

function addDatas(res) {
	const date = new Date();  // 2009-11-10
  const month = date.toLocaleString('default', { month: 'long' });
  console.log(month);
  console.log(date.getDate());
  var fda=date.getDate()+" "+month;


		//console.log(new Date(data.cases_time_series[5].date));
	for (var i = 0; i < res.cases_time_series.length; i++) {
		//console.log(data.cases_time_series[i]);
		dataPoints.push({
			x: new Date(res.cases_time_series[i].date+"2020"),

			y: parseInt(res.cases_time_series[i].totalrecovered),
			lineColor:"#23AAE9"
		});
	}


	$("#chartContainer1").CanvasJSChart(options);

}
$.getJSON("https://api.covid19india.org/data.json", addDatas);

}
