import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import main_logo from '../Img/main_logo.png'
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import avatar_img from '../Img/avatar.jpg'

function Header() {
  return (
    <div className='header'>
      
      <div className="header__left">

        <img src={main_logo} alt="" />
        <div className="header__search">
          <SearchIcon />
            <input type="text" placeholder='Search' />
        </div>
      </div>

      <div className="header__right">
        {/* we will build a component for the right side */}

        <HeaderOption Icon={HomeIcon} title='Home'/>
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
        <HeaderOption Icon={ChatIcon} title='Messaging'/>
        <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
        <HeaderOption avatar={avatar_img} title='me'/>
      </div>

    </div>
  )
}

export default Header
