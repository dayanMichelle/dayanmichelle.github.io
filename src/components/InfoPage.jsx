import Slider from './Slider'

const InfoPage = () => {
    return (
        <div className='media' style={{
            maxWidth: '50%',
        }}>
            <div>
                <p style={{ color: 'gray', fontWeight: 'bold' }}>CV</p>
                <p style={{ fontFamily: 'Roboto sans-serif', fontSize: '30px', margin: '0', color: '#22577E' }}>Dayan Arango Vallejo</p>
                <hr style={{ backgroundColor: '#F5C6AA' }} />
                
                <Slider />
            </div>
        </div>
    )
}

export default InfoPage