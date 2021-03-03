import Hour from './Hour'

const Hours = ( {hourly} ) => {

    console.log(hourly)
    return (
        <div className='hours'>
            { hourly.map((hour, index) => { 
                return <Hour
                    key={ index }
                    time={hour.dt}
                    temp={hour.temp}
                    icon={hour.weather[0].icon}
                    condition={hour.weather[0].main}
                    humidity={hour.humidity}
                    wind={hour.wind_speed}
                
                
                ></Hour>})
            } 
            
            
        </div>
    )
}

export default Hours
