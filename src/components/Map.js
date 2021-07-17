import {useState} from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationMarkerCyclone from "./LocationMarkerCyclone"
import LocationMarkerSnow from "./LocationMarkerSnow"
import LocationMarkerVolcano from "./LocationMarkerVolcano"
import LocationInfoBox from './LocationInfoBox'

const Map = ({eventData,center,zoom}) => {
    const [locationInfo, setLocationInfo] = useState(null)
    const markers= eventData.map( ev => {
        if(ev.categories[0].id===8){
            return <LocationMarker lat={ev.geometries[0].coordinates[1]} 
            lng={ev.geometries[0].coordinates[0]}  onClick={()=> setLocationInfo({
                id: ev.id, title: ev.title})
        }/>
        }
        else if(ev.categories[0].id===10){
            return <LocationMarkerCyclone lat={ev.geometries[0].coordinates[1]} 
            lng={ev.geometries[0].coordinates[0]}  onClick={()=> setLocationInfo({
                id: ev.id, title: ev.title})
                }/>                
        }
        else if(ev.categories[0].id===17){
            return <LocationMarkerSnow lat={ev.geometries[0].coordinates[1]} 
            lng={ev.geometries[0].coordinates[0]}  onClick={()=> setLocationInfo({
                id: ev.id, title: ev.title})
                }/>                
        }
        else if(ev.categories[0].id===12){
            if(isNaN(ev.geometries[0].coordinates[0])){
                return null
            }
            return <LocationMarkerVolcano lat={ev.geometries[0].coordinates[1]} 
            lng={ev.geometries[0].coordinates[0]}  onClick={()=> setLocationInfo({
                id: ev.id, title: ev.title})
                }/>                
        }
        return null
    })
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{key: ''}} //Enter key here
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}


Map.defaultProps ={
    center:{
        lat: 0.5937,
        lng: 78.9629
    },
    zoom: 4
}

export default Map
