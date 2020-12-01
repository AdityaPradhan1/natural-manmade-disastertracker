import {Icon} from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/snowflake-alert'

const LocationMarker = ({lat, lng, onClick}) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={locationIcon} className="location-snow-icon" />
            
        </div>
    )
}

export default LocationMarker
