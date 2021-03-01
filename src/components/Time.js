import PropTypes from 'prop-types'


const Time = ({ time }) => {
    const date = new Date(time*1000)
    const hours = date.getHours()
    const minutes = date.getMinutes()
    
    
    return (
        <div>
            <p> As of {hours%12 + ":"}{minutes<10? '0'+minutes : minutes} {hours > 12 ? "pm" : "am"  }   </p>            
        </div>
    )
}

Time.defaultProps = {
    time: 'test_time',
}

Time.propTypes = {
    time: PropTypes.number, 
}


export default Time
