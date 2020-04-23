		const date = new Date();  // 2009-11-10
const month = date.toLocaleString('default', { month: 'long' });
console.log(month);
 console.log(date.getDate());
var fda=date.getDate()+" "+month;
console.log(fda);
		$(document).ready(function(){
              

              const proxyurl = "https://cors-anywhere.herokuapp.com/";
			fetch(proxyurl+'https://thevirustracker.com/free-api?global=stats')
			.then(function(res)
               {
               	return (res.json());
               }
				)
			.then(function(data)
			{     
                //var last=data.cases_time_series.length;
                //var last_data=data.tested.length;
                console.log(data.results[0]);
             
			

         var totalconfirmed=data.results[0].total_cases;
         var totalrecovered=data.results[0].total_recovered;
         var totalactive = data.results[0].total_active_cases;
         var totaldeceased=data.results[0].total_deaths;
         //var sample_tested=data.tested[last_data-1].totalindividualstested;
         //var daily_test= data.tested[last_data-1].samplereportedtoday;
         

        document.getElementById("cnf_case").innerHTML=totalconfirmed.toLocaleString();
        document.getElementById("rec_case").innerHTML=totalrecovered.toLocaleString();
        document.getElementById("death_case").innerHTML=totaldeceased.toLocaleString();
        document.getElementById("act_case").innerHTML=totalactive.toLocaleString();
        //document.getElementById("sample_tested").innerHTML=sample_tested;

        document.getElementById("daily_cnf_case").innerHTML=data.results[0].total_unresolved.toLocaleString();
        document.getElementById("daily_rec_case").innerHTML=data.results[0].total_serious_cases.toLocaleString();
        document.getElementById("daily_death_case").innerHTML=data.results[0].total_new_deaths_today.toLocaleString();
        document.getElementById("daily_act_case").innerHTML=data.results[0].total_new_cases_today.toLocaleString();
        

			});
			
		});



        
         const proxyurl = "https://cors-anywhere.herokuapp.com/";
            fetch(proxyurl+'https://api.covid19api.com/summary')
            .then(function(res)
               {
                return (res.json());
               }
                )
            .then(function(data)
            {     
                //var last=data.cases_time_series.length;
                //var last_data=data.tested.length;
                console.log(data);
                var count = data.Countries.length;
                console.log(count);
        temp = "";
        for (var i = 0; i < count; i++) 
        {   
            var statewiseData = data.Countries[i];
             //data.Countries[i].Totalconfirmed.sort(function(a, b){return a - b});
            var active= parseInt(statewiseData.TotalConfirmed)-(parseInt(statewiseData.TotalRecovered)+parseInt(statewiseData.TotalDeaths));
            //console.log(stateData.state);
            //Add the data rows.
            temp += "<tr>";
            temp += "<td>" + statewiseData.Country+"</td>";
            temp += "<td>" + statewiseData.TotalConfirmed.toLocaleString() +"</td>";
            temp += "<td>" + active.toLocaleString() + "</td>";
            temp += "<td class='bg-warning'>" + "  ↑ "+statewiseData.NewConfirmed.toLocaleString()+"</td>";

            
            temp += "<td>" + statewiseData.TotalRecovered.toLocaleString() + "</td>";
            temp += "<td class='bg-success'>" +  "↑"+statewiseData.NewRecovered.toLocaleString()+"</td>";
            temp += "<td>" + statewiseData.TotalDeaths.toLocaleString() + "</td>";
            
            temp += "<td class='bg-dark text-light'>" +  "  ↑  "+statewiseData.NewDeaths.toLocaleString()+"</td>";
             
            temp += "</tr>";  


        }
        
       document.getElementById("data").innerHTML = temp;
             
            });

          

          