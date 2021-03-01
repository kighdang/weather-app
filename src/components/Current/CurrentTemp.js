import PropTypes from 'prop-types'

const CurrentTemp = ({ temp, condition, conditionDescription }) => {
    return (
        <div>
            
            <h1>{ temp } &deg;F</h1> 
            <p>{ condition }</p>
            <p>{ conditionDescription }</p>
        </div>
    )
}

CurrentTemp.propTypes = {
    temp: PropTypes.string, 
    condition: PropTypes.string, 
    conditionDescription: PropTypes.string,
}
export default CurrentTemp
