function getChartData() {
    $("#loadingMessage").html('<img src="Preloader.gif" alt="" srcset="">');
    $.ajax({
        url: "https://api.covid19india.org/data.json",
        success: function (result) {
            $("#loadingMessage").html("");
            var data = [];
           
            var labels=[];
               
               console.log(result.cases_time_series);
            for(var i=35;i<result.cases_time_series.length;i++)
            { 
            data.push(result.cases_time_series[i].totalconfirmed);
           
             labels.push(result.cases_time_series[i].date);

           

         }
            renderChart(data, labels);
        },
        error: function (err) {
            $("#loadingMessage").html("Error");
        }
    });
}

$(document).ready(
    function () {
        getChartData();
          getRecData();
          getDeathData();
    }
);



function renderChart(data, labels) {
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        responsive:true,
        data: {
            labels: labels,
            datasets: [{
                label: 'Confirm Case',
                data: data,
                borderColor: '#FA1923',
                order:1
                //backgroundColor: '#F7868B',
            }]
        },
        options: { 

            scales: {
            	      
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        callback: function(value, index, values) {
                            
                        }
                    }
                }]                
            }
        },
    });
}








function getRecData() {
    $("#loadingMessage").html('<img src="Preloader.gif" alt="" srcset="">');
    $.ajax({
        url: "https://api.covid19india.org/data.json",
        success: function (result) {
            $("#loadingMessage").html("");
            var data = [];
            var labels=[];

            for(var i=35;i<result.cases_time_series.length;i++)
            { console.log(result.cases_time_series[i].totalrecovered);
            data.push(result.cases_time_series[i].totalrecovered);
            
             labels.push(result.cases_time_series[i].date);

           

         }
            renderRec(data, labels);
        },
        error: function (err) {
            $("#loadingMessage").html("Error");
        }
    });
}





function renderRec(data, labels) {
    var ctx1 = document.getElementById("myChart1").getContext('2d');
    var myChart1 = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Recovered Case',
                data: data,
                borderColor: '#48C9B0',
                
            }]
        },
        options: { 

            scales: {
                      
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        callback: function(value, index, values) {
                            
                        }
                    }
                }]                
            }
        },
    });
}











function getDeathData() {
    $("#loadingMessage").html('<img src="Preloader.gif" alt="" srcset="">');
    $.ajax({
        url: "https://api.covid19india.org/data.json",
        success: function (result) {
            $("#loadingMessage").html("");
            var data = [];
            var labels=[];

            for(var i=35;i<result.cases_time_series.length;i++)
            { console.log(result.cases_time_series[i].totalrecovered);
            data.push(result.cases_time_series[i].totaldeceased);
            
             labels.push(result.cases_time_series[i].date);

           

         }
            renderDeath(data, labels);
        },
        error: function (err) {
            $("#loadingMessage").html("Error");
        }
    });
}





function renderDeath(data, labels) {
    var ctx2 = document.getElementById("myChart2").getContext('2d');
    var myChart2 = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Death Case',
                data: data,
                borderColor: '#48C9B0 ',
                //backgroundColor: '#48C9B0 ',
            }]
        },
        options: { 

            scales: {
                      
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        callback: function(value, index, values) {
                            
                        }
                    }
                }]                
            }
        },
    });
}



