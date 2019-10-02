//JSON response -- temperature 
const location = "http://api.openweathermap.org/data/2.5/weather?q=Philadelphia,usa&appid=ad197b2a2b21e5c149be54d637d642ca";

var tempToF = function(t){
   
   return ((9/5)*(t - 273)) +32;
}

//returns a promise
var getWeather = function() {
   return  new Promise(function(resolve, reject) {
               var xhttp = new XMLHttpRequest();
               xhttp.open("GET", location); 
               xhttp.onload = () => { if(xhttp.status !== 200){
                                        reject(xhttp.status);
                                      }
                                      resolve(xhttp.responseText);
                                    };
               xhttp.onerror = () => {reject(xhttp.status);};
               xhttp.send();
           });


}

module.exports =  {getWeather, tempToF};
