import CurrentTemp from './CurrentTemp'
import CurrentIcon from './CurrentIcon'
import PropTypes from 'prop-types'

const Current = ({currentTemp, currentCondition, currentConditionDescription, currentIcon}) => {
    return (
        <div>
            
            <div className='current'>
                <CurrentTemp temp={ currentTemp } condition={ currentCondition } conditionDescription={ currentConditionDescription}></CurrentTemp>
                <CurrentIcon icon={ currentIcon }></CurrentIcon>
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
