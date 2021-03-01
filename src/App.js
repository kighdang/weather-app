import Location from './components/Location'
import Time from './components/Time'
import Current from './components/Current/Current'
import Header from './components/Header'
import Days from './components/Days'
import Hours from './components/Hours'


import { useState } from 'react'



function App() {
  
  const [showHourly, setShowHourly] = useState(false)
  const [location, setLocation] = useState('')
  const [time, setTime] = useState('')
  const [currentTemp, setCurrentTemp] = useState('')
  const [condition, setCondition] = useState('')
  const [conditionDescription, setConditionDescription] = useState('')
  const [currentIcon, setCurrentIcon] = useState('http://openweathermap.org/img/wn/01d@4x.png')
  const [currentHigh, setCurrentHigh] = useState('')
  const [cuurrentLow, setCurrentLow] = useState('')



  const fetchData = async () =>{
    const res = await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&appid=18844717bd89acba7f6a77acf78adb95&units=imperial")
    const data = await res.json()

    return data
    
    


  }

  const updateCurrent = async() => {
    const jsonObj = fetchData().then(response => { 
      setTime(response.current.dt)
      setCurrentTemp(response.current.temp)
      setCondition(response.current.weather[0].main)
      setConditionDescription(response.current.weather[0].description)
      setCurrentIcon('http://openweathermap.org/img/wn/'+ response.current.weather[0].icon + '@4x.png')
      setCurrentHigh(response.daily[0].temp.max)
      setCurrentLow(response.daily[0].temp.min)
      //console.log(response.current.weather[0].main)
    })
  }

  
  // updateApp()

 

  





  return (
    <div className="App">
      <Header></Header>
      <Location></Location>
      <Time time={ time }></Time>
      <Current currentTemp={ currentTemp } currentCondition={ condition } currentConditionDescription={ conditionDescription } currentIcon={ currentIcon }></Current>
      <Hours></Hours>
      <Days></Days>
    </div>
  );
}

export default App;
