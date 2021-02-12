let currentWeatherIcon = document.getElementById("currIcon")
let currentWeatherText = document.getElementById("currText")
let currentWeatherTemp = document.getElementById("temp")


fetch("http://api.weatherapi.com/v1/forecast.json?q=75081&key=912d716ca718485d923163600210802&days=3")
.then(res => res.json())
.then(data => {
    currentWeatherIcon.innerHTML += `<img src ="${"http:"+data.current.condition.icon}"/> `
    currentWeatherText.innerHTML += `<h2> ${data.current.condition.text} </h2>`
    currentWeatherTemp.innerHTML += `<h2> ${data.current.temp_f} </h2>`

    // Get 3 Day Forecast
    for (i = 0; i < data.forecast.forecastday.length; i++){
        var icon = document.getElementById("icon"+(i+1))
        var text = document.getElementById("text"+(i+1))
        var high = document.getElementById("high"+(i+1))
        var low = document.getElementById("low"+(i+1))
            
        icon.innerHTML = `<img src ="${"http:"+ data.forecast.forecastday[i].day.condition.icon}"/> `
        text.innerHTML = `<h2> ${data.forecast.forecastday[i].day.condition.text} </h2> `
        high.innerHTML = `<h2> ${data.forecast.forecastday[i].day.maxtemp_f} </h2> `
        low.innerHTML = `<h2> ${data.forecast.forecastday[i].day.mintemp_f}</h2> `
        
    }

    
})



