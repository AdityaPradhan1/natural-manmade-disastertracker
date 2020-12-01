import Volcano from './volcano.svg'

const LocationMarkerVolcano = ({lat, lng, onClick}) => {
    return (
        <div className="location-marker-snow" onClick={onClick}>
            <img src={Volcano} className="location-volcano-icon" />
            
        </div>
    )
}

export default LocationMarkerVolcano
