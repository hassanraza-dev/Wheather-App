var input = document.getElementById('user-input');
var main = document.getElementById('name');
var temp = document.getElementById('temp');
var desc = document.getElementById('desc');
var day = document.getElementById('day');
var button= document.getElementById('btn');

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

var dayname = new Date()



function get_data()
{
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  tempValue -= 273.15;
  tempValue = Math.floor(tempValue)

  main.innerHTML = nameValue;
  desc.innerHTML = descValue;
  temp.innerHTML = tempValue + "<span>&deg;C</span>" ;
  day.innerHTML = days[dayname.getDay()]
  input.value ="";

})

.catch(err => alert("Pleas Enter City Name"));
}

