import Location from './components/Location'
import Time from './components/Time'
import Current from './components/Current/Current'
import Header from './components/Header'
import Days from './components/Days'
import Hours from './components/Hours'


import { useState, useEffect } from 'react'



function App() {
  
  const [showHourly, setShowHourly] = useState(true)
  const [location, setLocation] = useState('')
  const [time, setTime] = useState(0)
  const [currentTemp, setCurrentTemp] = useState('')
  const [condition, setCondition] = useState('')
  const [conditionDescription, setConditionDescription] = useState('')
  const [currentIcon, setCurrentIcon] = useState('http://openweathermap.org/img/wn/01d@4x.png')
  const [currentHigh, setCurrentHigh] = useState('')
  const [currentLow, setCurrentLow] = useState('')
  const [days, setDays] = useState([])
  const [hourly, setHourly] = useState([])
  const [data, setData] = useState()


  const fetchData = async () =>{
    const res = await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&appid=18844717bd89acba7f6a77acf78adb95&units=imperial")
    const data = await res.json()

    return data
  }


  useEffect(() => {
	const updateData = async() => {
		const data = await fetchData()
		setData(data)

		console.log(data)
	
		// Current weather data
		setTime(data.current.dt)
		setCurrentTemp(data.current.temp)
		setCondition(data.current.weather[0].main)
		setConditionDescription(data.current.weather[0].description)
		setCurrentIcon('http://openweathermap.org/img/wn/'+ data.current.weather[0].icon + '@4x.png')
		setCurrentHigh(data.daily[0].temp.max)
		setCurrentLow(data.daily[0].temp.min)
  
		// Daily
		setDays([...data.daily])
		
  
  
		// Hourly
		setHourly([...data.hourly])  
	
	}

	updateData()
	  
  },[])

  

  

  /* const testDays = [
	{
		"dt": 1614276000,
		"sunrise": 1614257344,
		"sunset": 1614298175,
		"temp": {
			"day": 56.21,
			"min": 45.36,
			"max": 56.7,
			"night": 46.4,
			"eve": 50.97,
			"morn": 47.07
		},
		"feels_like": {
			"day": 49.51,
			"night": 38.41,
			"eve": 45.32,
			"morn": 39.52
		},
		"pressure": 1024,
		"humidity": 71,
		"dew_point": 47.12,
		"wind_speed": 10.63,
		"wind_deg": 69,
		"weather": [
			{
				"id": 500,
				"main": "Rain",
				"description": "light rain",
				"icon": "10d"
			}
		],
		"clouds": 35,
		"pop": 1,
		"rain": 1.49,
		"uvi": 5.57
	},
	{
		"dt": 1614362400,
		"sunrise": 1614343673,
		"sunset": 1614384626,
		"temp": {
			"day": 55.35,
			"min": 45.95,
			"max": 55.35,
			"night": 54.99,
			"eve": 53.96,
			"morn": 46.83
		},
		"feels_like": {
			"day": 53.19,
			"night": 55.76,
			"eve": 52.72,
			"morn": 41.47
		},
		"pressure": 1016,
		"humidity": 92,
		"dew_point": 53.13,
		"wind_speed": 5.53,
		"wind_deg": 109,
		"weather": [
			{
				"id": 502,
				"main": "Rain",
				"description": "heavy intensity rain",
				"icon": "10d"
			}
		],
		"clouds": 99,
		"pop": 1,
		"rain": 53.22,
		"uvi": 2.1
	},
	{
		"dt": 1614448800,
		"sunrise": 1614430002,
		"sunset": 1614471076,
		"temp": {
			"day": 64.13,
			"min": 54.7,
			"max": 67.19,
			"night": 63.57,
			"eve": 67.06,
			"morn": 54.7
		},
		"feels_like": {
			"day": 63.91,
			"night": 62.06,
			"eve": 67.17,
			"morn": 53.98
		},
		"pressure": 1015,
		"humidity": 90,
		"dew_point": 61.23,
		"wind_speed": 6.96,
		"wind_deg": 126,
		"weather": [
			{
				"id": 500,
				"main": "Rain",
				"description": "light rain",
				"icon": "10d"
			}
		],
		"clouds": 100,
		"pop": 1,
		"rain": 0.83,
		"uvi": 3.65
	},
	{
		"dt": 1614535200,
		"sunrise": 1614516330,
		"sunset": 1614557526,
		"temp": {
			"day": 72.63,
			"min": 59.23,
			"max": 72.63,
			"night": 59.23,
			"eve": 61.81,
			"morn": 64.67
		},
		"feels_like": {
			"day": 72.72,
			"night": 56.84,
			"eve": 61.11,
			"morn": 65.32
		},
		"pressure": 1013,
		"humidity": 83,
		"dew_point": 67.19,
		"wind_speed": 10.96,
		"wind_deg": 237,
		"weather": [
			{
				"id": 501,
				"main": "Rain",
				"description": "moderate rain",
				"icon": "10d"
			}
		],
		"clouds": 100,
		"pop": 1,
		"rain": 13.34,
		"uvi": 1.76
	},
	{
		"dt": 1614621600,
		"sunrise": 1614602656,
		"sunset": 1614643975,
		"temp": {
			"day": 51.66,
			"min": 47.93,
			"max": 56.08,
			"night": 48.04,
			"eve": 51.94,
			"morn": 49.44
		},
		"feels_like": {
			"day": 44.91,
			"night": 41.07,
			"eve": 46,
			"morn": 42.51
		},
		"pressure": 1024,
		"humidity": 84,
		"dew_point": 47.14,
		"wind_speed": 10.74,
		"wind_deg": 44,
		"weather": [
			{
				"id": 501,
				"main": "Rain",
				"description": "moderate rain",
				"icon": "10d"
			}
		],
		"clouds": 100,
		"pop": 0.99,
		"rain": 15.38,
		"uvi": 5.71
	},
	{
		"dt": 1614708000,
		"sunrise": 1614688983,
		"sunset": 1614730424,
		"temp": {
			"day": 40.84,
			"min": 40.12,
			"max": 45.12,
			"night": 43.7,
			"eve": 45.03,
			"morn": 43.79
		},
		"feels_like": {
			"day": 33.58,
			"night": 38.84,
			"eve": 40.8,
			"morn": 34.99
		},
		"pressure": 1024,
		"humidity": 90,
		"dew_point": 38.25,
		"wind_speed": 8.3,
		"wind_deg": 70,
		"weather": [
			{
				"id": 501,
				"main": "Rain",
				"description": "moderate rain",
				"icon": "10d"
			}
		],
		"clouds": 100,
		"pop": 1,
		"rain": 5.89,
		"uvi": 6
	},
	{
		"dt": 1614794400,
		"sunrise": 1614775308,
		"sunset": 1614816873,
		"temp": {
			"day": 58.28,
			"min": 37.76,
			"max": 61.09,
			"night": 49.75,
			"eve": 54.61,
			"morn": 37.76
		},
		"feels_like": {
			"day": 56.86,
			"night": 46.6,
			"eve": 52.65,
			"morn": 33.58
		},
		"pressure": 1021,
		"humidity": 65,
		"dew_point": 46.63,
		"wind_speed": 1.12,
		"wind_deg": 320,
		"weather": [
			{
				"id": 801,
				"main": "Clouds",
				"description": "few clouds",
				"icon": "02d"
			}
		],
		"clouds": 12,
		"pop": 0,
		"uvi": 6
	},
	{
		"dt": 1614880800,
		"sunrise": 1614861633,
		"sunset": 1614903321,
		"temp": {
			"day": 63.54,
			"min": 44.31,
			"max": 65.89,
			"night": 52.74,
			"eve": 58.32,
			"morn": 44.31
		},
		"feels_like": {
			"day": 59.61,
			"night": 48.78,
			"eve": 56.3,
			"morn": 40.55
		},
		"pressure": 1024,
		"humidity": 56,
		"dew_point": 47.77,
		"wind_speed": 5.97,
		"wind_deg": 96,
		"weather": [
			{
				"id": 800,
				"main": "Clear",
				"description": "clear sky",
				"icon": "01d"
			}
		],
		"clouds": 6,
		"pop": 0,
		"uvi": 6
	}
	]
    
	const testHourly = [{
		"dt": 1614312000,
		"temp": 45.36,
		"feels_like": 38.48,
		"pressure": 1017,
		"humidity": 87,
		"dew_point": 41.72,
		"uvi": 0,
		"clouds": 90,
		"visibility": 10000,
		"wind_speed": 8.86,
		"wind_deg": 69,
		"weather": [
			{
				"id": 500,
				"main": "Rain",
				"description": "light rain",
				"icon": "10n"
			}
		],
		"pop": 1,
		"rain": {
			"1h": 0.29
		}
	},
	{
		"dt": 1614312000,
		"temp": 45.36,
		"feels_like": 38.48,
		"pressure": 1017,
		"humidity": 87,
		"dew_point": 41.72,
		"uvi": 0,
		"clouds": 90,
		"visibility": 10000,
		"wind_speed": 8.86,
		"wind_deg": 69,
		"weather": [
			{
				"id": 500,
				"main": "Rain",
				"description": "light rain",
				"icon": "10n"
			}
		],
		"pop": 1,
		"rain": {
			"1h": 0.29
		}
	},
	] 

   const testDailyData = () => {
     
     days.length == 0 && setDays([...testDays]) 
     console.log(days)
   }

   const testHourlyData = () => {
	   hourly.length == 0 && setHourly([...testHourly])
	   //console.log(hourly)
   }
   */
  
   const toggleHourly = () => { 
	setShowHourly(!showHourly)
   }








  return (
    <div className="evening" >
	  <Header></Header>
      <Location></Location>
  
      <Time 
        time={ time }>
      </Time>

      <Current 
        currentTemp={ currentTemp } 
        currentCondition={ condition } 
        currentConditionDescription={ conditionDescription } 
        currentIcon={ currentIcon } currentHigh={ currentHigh } 
        currentLow={ currentLow }
		onClick={ toggleHourly }
		>
		
      </Current>

	  {showHourly ? <h2>Hourly Forecast</h2> : '' }	
      {showHourly ? <Hours hourly={hourly}></Hours> : '' }

	  <h2>Daily Forecast</h2>
      <Days days={days}></Days>
    </div>
  );
}

export default App;
