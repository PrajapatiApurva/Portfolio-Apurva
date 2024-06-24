import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/assets/logo.png'
import underline from '../../assets/assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {

  const [menu, setMenu] = useState('');

  return (
    <div className='navbar'>
      <img src={logo} alt="" className="navbar-logo" />
      <ul className="nav-menu">
        <li><AnchorLink href='#hero'><p onClick={()=> setMenu('home')}>Home</p></AnchorLink>{menu==='home'&&<img src={underline} alt='underline'/>}</li>
        <li><AnchorLink offset={50} href='#about'><p onClick={()=> setMenu('about')}>About Me</p></AnchorLink>{menu==='about'&&<img src={underline} alt='underline'/>}</li>
        <li><AnchorLink offset={50} href='#services'><p onClick={()=> setMenu('services')}>Services</p></AnchorLink>{menu==='services'&&<img src={underline} alt='underline'/>}</li>
        <li><AnchorLink offset={50} href='#projects'><p onClick={()=> setMenu('projects')}>Portfolio</p></AnchorLink>{menu==='projects'&&<img src={underline} alt='underline'/>}</li>
        <li><AnchorLink offset={50} href='#contact'><p onClick={()=> setMenu('contact')}>Contact</p></AnchorLink>{menu==='contact'&&<img src={underline} alt='underline'/>}</li>
      </ul>
      <div className="nav-connect"><AnchorLink href='#footer'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar;