const apiKey = "9ef32878b35b04fe972acc5823f09d9d"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


checkWeather();
async function checkWeather(city)
{
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
  

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +  "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity +  "%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) +  "km/h";

    if(data.weather[0].main === "Clouds")
    {
        weatherIcon.src = "images2/clouds.png";
    }
    else if(data.weather[0].main === "Clear")
    {
        weatherIcon.src = "images2/clear.png";
    }   
    else if(data.weather[0].main === "Rain")
    {
        weatherIcon.src = "images2/rain.png";
    } 
    else if(data.weather[0].main === "Drizzle")
    {
        weatherIcon.src = "images2/drizzle.png";
    }   
    else if(data.weather[0].main === "Mist")
    {
        weatherIcon.src = "images2/mist.png";
    }    

    document.querySelector(".weather").style.display = "block" ;
       



}

searchBtn.addEventListener("click", ()=>
{
    checkWeather(searchBox.value);
});
