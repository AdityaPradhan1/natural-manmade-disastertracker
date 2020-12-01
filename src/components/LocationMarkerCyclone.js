import {Icon} from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/weather-hurricane'

const LocationMarkerCyclone = ({lat, lng, onClick}) => {
    return (
        <div className="location-marker-cyclone" onClick={onClick}>
            <Icon icon={locationIcon} className="location-cyclone-icon" />
            
        </div>
    )
}

export default LocationMarkerCyclone
