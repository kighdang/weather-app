import PropTypes from 'prop-types'

const CurrentTemp = ({ temp, condition, conditionDescription }) => {
    const condDescriptString = conditionDescription.split(' ')
    
    return (
        <div>
            
            <h1>{ Math.trunc(temp) } &deg;F</h1> 
            <p>{ condition }</p>
            <p>{ condDescriptString }</p>
        </div>
    )
}

CurrentTemp.propTypes = {
    temp: PropTypes.string, 
    condition: PropTypes.string, 
    conditionDescription: PropTypes.string,
}
export default CurrentTemp
