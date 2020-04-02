var input = document.getElementById('user-input');
var main = document.getElementById('name');
var temp = document.getElementById('temp');
var desc = document.getElementById('desc');
var day = document.getElementById('day');
var button= document.getElementById('btn');
var kel = document.getElementById('kel');
var fehr = document.getElementById('fehr');
var bg = document.getElementById('bg');
var bg2 = document.getElementById('bg2');
input.value.toLowerCase()
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

  var cnvtempValue = tempValue - 273.15;
  cnvtempValue = Math.floor(cnvtempValue)

   var calfehr = Math.floor((cnvtempValue * 9/5) + 32)
if(input.value == "karachi")
{
  bg.style.backgroundImage = "url('./img/khi.jpg')";
  bg2.style.backgroundImage = "url('./img/khi.jpg')";
}
else if(input.value == "paris")
{
  bg.style.backgroundImage = "url('./img/paris.jpg')";
  bg2.style.backgroundImage = "url('./img/paris.jpg')";
}
 else if(input.value == "lahore")
{
  bg.style.backgroundImage = "url('./img/lhr.jpg')";
  bg2.style.backgroundImage = "url('./img/lhr.jpg')";
}
else if(input.value == "london")
{
  bg.style.backgroundImage = "url('./img/london.jpg')";
  bg2.style.backgroundImage = "url('./img/london.jpg')";
}
else
{
  bg.style.backgroundImage = "url('./img/cover.jpg')";
  bg2.style.backgroundImage = "url('./img/cover.jpg')"

}
  main.innerHTML = nameValue;
  desc.innerHTML = descValue;
  temp.innerHTML = cnvtempValue + "<span>&deg;C</span>" ;
  day.innerHTML = days[dayname.getDay()]
  fehr.innerHTML = calfehr+ "<span>&deg;F</span>"
  kel.innerHTML = tempValue + "<span>&deg;K</span>"
  input.value ="";
  

})

.catch(err => alert(err));
}

