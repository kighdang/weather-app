import Day from './Day'

const Days = ({ days }) => {
    
    console.log(days)
    
    return (

        <div className='days'>
            
            {days.map((day, index) => {
                
                return <Day 
                    key={index}
                    day={ day.dt }
                    dayIcon={day.weather[0].icon}
                    dayHigh={day.temp.max}
                    dayLow={day.temp.min}
                ></Day>})   
            } 
 

        </div>
    )
}

export default Days
