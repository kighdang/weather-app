import CurrentTemp from './CurrentTemp'
import CurrentIcon from './CurrentIcon'
import PropTypes from 'prop-types'

const Current = ({currentTemp, currentCondition, currentConditionDescription, currentIcon, currentHigh, currentLow, onClick}) => {
    return (
        <div>
            
            <div className='current' onClick={onClick}>
                <CurrentTemp temp={ currentTemp } condition={ currentCondition } conditionDescription={ currentConditionDescription}></CurrentTemp>
                <CurrentIcon icon={ currentIcon } currentHigh={ currentHigh } currentLow={ currentLow }></CurrentIcon>
            </div>
        </div>
    )
}


Current.propTypes = {
    currentTemp: PropTypes.string,
    currentCondition: PropTypes.string,
    currentConditionDescription: PropTypes.string, 
    currentIcon: PropTypes.string, 
    

}



export default Current
