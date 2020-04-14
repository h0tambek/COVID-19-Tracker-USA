window.onload = function(){
  getCovidStats();
}
function getCovidStats(){ // Fetch ExpDev07's coronavirus-tracker-api
  fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/225')
  .then(function(resp) {return resp.json()})
  .then(function(data){
    let population = data.location.country_population;
    let update = data.location.last_updated;
    let confirmedCases = data.location.latest.confirmed;
    let deaths = data.location.latest.deaths;

    document.getElementById('population').innerHTML = population.toLocaleString('en');
  		document.getElementById('lastupdate').innerHTML = update.substr(0, 10);
		document.getElementById('cases').innerHTML = confirmedCases.toLocaleString('en');
		document.getElementById('deaths').innerHTML = deaths.toLocaleString('en');
		document.getElementById('percent').innerHTML = ((Number(deaths)/Number(confirmedCases))*100).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%";

  })
  .catch(function(){
    console.log("Something went wrong, ERROR");
  })
  setTimeout(getCovidStats, 4200000);
}
