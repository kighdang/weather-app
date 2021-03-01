import PropTypes from 'prop-types'

const Location = (location) => {
    return (
        <div className='location'>
            <h3>Current Weather for Dallas, TX</h3>
        </div>
    )
    
}

Location.defaultProps = {
    location: 'test_location', 

}

Location.propTypes ={
    location: PropTypes.string.isRequired, 
}


export default Location
           
