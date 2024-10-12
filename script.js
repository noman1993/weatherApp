// ce622f1b8e7b8c25608b6aae0d8fc52a

// https://api.openweathermap.org/data/2.5/weather?units=metric&q=dhaka&appid=ce622f1b8e7b8c25608b6aae0d8fc52a

const apiKey = "ce622f1b8e7b8c25608b6aae0d8fc52a"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

    if(response.status == 404){
        document.querySelector('.error').style.display = "block"
        document.querySelector('.weather').style.display = "none"
    }else{
        const data = await response.json()
    console.log(data);

    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c"
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%"
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h"

    document.querySelector('.weather').style.display = "block"
    document.querySelector('.error').style.display = "none"
    }
    
    
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value)
})

