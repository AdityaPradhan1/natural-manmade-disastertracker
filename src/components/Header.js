import {Icon} from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/alert'

const Header = () => {
    return (
       <header className="header">
        <h1> <Icon className="header-icon" icon={locationIcon}/> Natural/Manmade Disaster Tracker (Using Nasa Api)</h1>

       </header>
    )
}

export default Header
