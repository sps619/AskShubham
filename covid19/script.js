


function toggle()
{
   
    var element = document.body;
    element.classList.toggle("dark-mode");
     document.getElementById("togglebtn").innerHTML="Return to Original";
    document.getElementById("togglebtn").style.color="Black";
    document.getElementById("death_case_title").style.color="white";
   document.getElementById("death_case").style.color="white";
   document.getElementById("daily_death_case_title").style.color="white";
   document.getElementById("clrC").style.color="white";
   document.getElementById("clrC1").style.color="white";
   document.getElementById("clrC2").style.color="white";
   document.getElementById("state_death_case").style.color="white";
   document.getElementById("daily_state_death_case").style.color="white";
   document.getElementById("state_death_title").style.color="white";
  
  
   document.getElementById("cnf_case").style.color="white";
         document.getElementById("rec_case").style.color="white";
         document.getElementById("death_case").style.color="white";
         document.getElementById("act_case").style.color="white";

         document.getElementById("daily_cnf_case").style.color="white";
         document.getElementById("daily_rec_case").style.color="white";
     document.getElementById("daily_death_case").style.color="white";
         document.getElementById("daily_act_case").style.color="white";
  
  
  
    document.getElementById("prvnt_title").style.color="white";
     document.getElementById("daily_death_case").style.color="white";
     document.getElementById("card_deck").style.backgroundColor="white";
     document.getElementById("card_deck").style.color="Black";
   
    document.getElementById("navbarDropdownMenuLink").style.color="white";
    document.getElementById("daily_death_case").style.color="white";
    
    
    
}

const date = new Date();  // 2009-11-10
  const month = date.toLocaleString('default', { month: 'long' });
  console.log(month);
  console.log(date.getDate());
  var fda=date.getDate()+" "+month;
  console.log(fda);

 var stateN= "" ;
 var  confirData=[];



 fetch('https://api.covid19india.org/data.json')
            .then(function(res)
               {
                return (res.json());
               }
                )
.then(function(data)
{var state_last=data.statewise.length;

$.get("https://ipinfo.io", function(response) {
  console.log(response.ip, response.country);
  stateN=response.region;
  let state_name=data.statewise.find(resn=>resn.state==stateN);
  console.log(state_name["confirmed"],state_name["state"],state_name["deltarecovered"],state_name["deltaconfirmed"]);
  document.getElementById("headState").innerHTML=state_name["state"];
   
   document.getElementById("state_cnf_case").innerHTML=state_name["confirmed"];
   document.getElementById("state_act_case").innerHTML=state_name["active"];
   document.getElementById("state_rec_case").innerHTML=state_name["recovered"];
   document.getElementById("state_death_case").innerHTML=state_name["deaths"];

  //document.getElementById("daily_state_cnf_case").innerHTML="+ ".state_name["deltaconfirmed"];
  
  //document.getElementById("daily_state_rec_case").innerHTML="+ ".state_name["deltarecovered"];
  //document.getElementById("daily_state_death_case").innerHTML="+ ".state_name["deltadeaths"];
  
}, "jsonp")

                console.log(stateN);   

                const statewise= data.statewise;
  

                var last=data.cases_time_series;
                var last_data=data.tested.length;
                console.log(data.statewise);
               
                console.log(data.cases_time_series);
      
         //console.log(last_data);
        console.log(data.tested[last_data-1].totalindividualstested);
         console.log(data.tested[0].updatetimestamp);
         var tests=parseInt(data.tested[last_data-1].totalindividualstested);

         var totalconfirmed=parseInt(data.statewise[0].confirmed);
         var totalrecovered=parseInt(data.statewise[0].recovered);
         var totaldeceased= parseInt(data.statewise[0].deaths);
         var totalactive=parseInt(data.statewise[0].active);

        //console.log(data.statewise[5].state);
         document.getElementById("cnf_case").innerHTML=totalconfirmed.toLocaleString();
         document.getElementById("rec_case").innerHTML=totalrecovered.toLocaleString();
         document.getElementById("death_case").innerHTML=totaldeceased.toLocaleString();
         document.getElementById("act_case").innerHTML=totalactive.toLocaleString();

         document.getElementById("daily_cnf_case").innerHTML="↑ " +parseInt(data.statewise[0].deltaconfirmed).toLocaleString();
         document.getElementById("daily_rec_case").innerHTML="↑ " +parseInt(data.statewise[0].deltarecovered).toLocaleString();
         document.getElementById("daily_death_case").innerHTML="↑ "+parseInt(data.statewise[0].deltadeaths).toLocaleString();
         document.getElementById("daily_act_case").innerHTML=tests.toLocaleString();
              
          
              

            });
            
       




