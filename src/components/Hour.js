import React from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { WiRaindrop } from 'react-icons/wi'
import { WiStrongWind } from 'react-icons/wi'



const Hour = ({time, temp, icon, condition, humidity, wind}) => {
    
    const hour = new Date(time*1000).getHours()
    
    return (
        <div className='hour'>
            <p>{hour%12} {hour > 11 ? 'pm' : 'am'} </p>            
            <h2>{Math.trunc(temp)}&deg; </h2>
            <img src={"http://openweathermap.org/img/wn/" + icon + ".png"}></img>
            <p> {condition} </p>
            
            <p><WiRaindrop></WiRaindrop> {humidity}% </p>
            <p><WiStrongWind></WiStrongWind> {wind} </p>
            <h1><RiArrowDropDownLine></RiArrowDropDownLine> </h1>
            
        </div>
    )
}

export default Hour
