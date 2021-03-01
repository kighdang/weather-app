import React from 'react'
import { icons } from 'react-icons'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { WiRaindrop } from 'react-icons/wi'
import { WiStrongWind } from 'react-icons/wi'



const Hour = () => {
    return (
        <div className='hour'>
            <p>1 pm </p>            
            <h2>53&deg; </h2>
            <img src="http://openweathermap.org/img/wn/01d.png"></img>
            <p> Clear </p>
            
            <p><WiRaindrop></WiRaindrop> 4% </p>
            <p><WiStrongWind></WiStrongWind> NE 12 mph </p>
            <h1><RiArrowDropDownLine></RiArrowDropDownLine> </h1>
            
        </div>
    )
}

export default Hour
