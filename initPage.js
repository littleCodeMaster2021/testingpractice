
export var initWPage = function() {
   var lbl = document.createElement('label'); 
   lbl.setAttribute('for','city');
   lbl.innerHTML = 'City';
   document.body.appendChild(lbl);

   var inpt = document.createElement('input'); 
   inpt.setAttribute('type','text');
   inpt.setAttribute('id','city');
   inpt.setAttribute('value','');
   document.body.appendChild(inpt);

   var btn = document.createElement('button'); 
   btn.setAttribute('type','button');
   btn.setAttribute('id','btn1');
   btn.innerHTML = 'Get Weather';
   document.body.appendChild(btn);

   document.body.appendChild(document.createElement('br'));

   var div = document.createElement('div');
   div.setAttribute('id','dat');
   div.innerHTML = "City:_____  * Temp:______";
   document.body.appendChild(div);
};



 var getWeather =  async function () {
     try {
      var resp = { "name": "Not found", "temp": -999 }
      const city = document.getElementById("city").value;
      const res = await fetch('http://localhost:8000/data.json');
      const wdata = await res.json();
      for (var k in wdata) {
         if (city === wdata[k].name) {
            resp = wdata[k];
         } 
      }
         return Promise.resolve(resp); 
   }
   catch (error) {
      return Promise.reject("Error");
   }
   
 };
 
 export var displayData = function () {
   getWeather().then(val => {
      document.getElementById('dat').setAttribute('class','result');
      document.getElementById('dat').innerHTML = "City: " + val.name + " * Temp: " + val.temp;
   });
   
};


