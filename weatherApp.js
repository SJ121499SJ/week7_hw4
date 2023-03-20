const cityForm = document.querySelector('.cityForm')

const search = document.querySelector('.searchButton')
search.addEventListener('click', (event)=>{
    event.preventDefault()
    cityName = cityForm.city.value
    getWeather(cityName)
})



const getWeather = async (cityName) => {
    const apiKey = '03b477591af97ddaeefa373d5a970705'
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=03b477591af97ddaeefa373d5a970705`)
    const data = await response.json()
    const country = data.sys.country
    const location = `${cityName}, ${country}`
    const high = data.main.temp_max
    const low = data.main.temp_min
    const humidity = data.main.humidity
    const forecast = data.weather[0].description

    document.querySelector('.location').innerHTML = location
    document.querySelector('.high').innerHTML = high
    document.querySelector('.low').innerHTML = low
    document.querySelector('.forecast').innerHTML = forecast
    document.querySelector('.humidity').innerHTML = humidity

    }



/*
const getWeather = async (cityName) => {
        const apiKey = '03b477591af97ddaeefa373d5a970705'
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=03b477591af97ddaeefa373d5a970705`)
        const data = await response.json()
        if (data.cod == "404"){
            document.querySelector('.error').innterHTML = Invalid City Name
        }else{
        const country = data.sys.country
        const location = `${cityName}, ${country}`
        const high = data.main.temp_max
        const low = data.main.temp_min
        const humidity = data.main.humidity
        const forecast = data.weather[0].description
    
        document.querySelector('.location').innerHTML = location
        document.querySelector('.high').innerHTML = high
        document.querySelector('.low').innerHTML = low
        document.querySelector('.forecast').innerHTML = forecast
        document.querySelector('.humidity').innerHTML = humidity
        }
*/