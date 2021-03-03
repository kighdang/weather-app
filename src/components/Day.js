import PropTypes from 'prop-types'

const Day = ({day, dayIcon, dayHigh, dayLow}) => {
    let dayName = ''

    switch(new Date(day * 1000).getDay()){
        case 0: dayName = 'Sun'
        break;
        case 1: dayName = 'Mon'
        break;
        case 2: dayName = 'Tue'
        break;
        case 3: dayName = 'Wed'
        break;
        case 4: dayName = 'Thu'
        break;
        case 5: dayName = 'Fri'
        break;
        case 6: dayName = 'Sat'
        break;
        
        
        
    }

    return (
        <div className='day'>
            <h2> { dayName } </h2>
            <img src={'http://openweathermap.org/img/wn/' + dayIcon + '@2x.png'}></img>
            <p>{Math.trunc(dayHigh)}&deg; / {Math.trunc(dayLow)}&deg;</p>
        </div>
    )
}

Day.propTypes = {
    day: PropTypes.number.isRequired, 
    dayIcon: PropTypes.string.isRequired, 
    dayHigh: PropTypes.number.isRequired, 
    dayLow: PropTypes.number.isRequired, 

}


export default Day
