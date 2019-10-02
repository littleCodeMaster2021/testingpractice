//api.js
var getWeather =  function (city) {
  if (city === 'city1') {
    return fetch('http://localhost:8000/data.json').then(res => res.json());
 //.then(wdata => wdata.city1);
  } else {
    return 'no argument provided'
  }
}

var displayData = function (res) {
   document.getElementById('loc').innerHTML = res.name + " : " + res.temp;
}


module.exports = { getWeather, displayData }
