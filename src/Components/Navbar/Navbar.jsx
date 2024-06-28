import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/assets/logo.png'
import underline from '../../assets/assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/assets/menu_open.svg'
import menu_close from '../../assets/assets/menu_close.svg'

const Navbar = () => {

  const [menu, setMenu] = useState('');
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = '0';
  }

  const closeMenu = () => {
    menuRef.current.style.right = '-350px';
  }

  return (
    <div className='navbar'>
      <img src={logo} alt="" className="navbar-logo" />
      <img  onClick={openMenu} src={menu_open} alt='toggle-icon-open' className='toggle-icon-open'/>
      <ul ref={menuRef} className="nav-menu">
        <img onClick={closeMenu} src={menu_close} alt='toggle-icon-close' className='toggle-icon-close'/>
        <li><AnchorLink href='#hero'><p onClick={()=> setMenu('home')}>Home  {menu==='home' && <div className={'underline'}></div>}</p></AnchorLink></li>
        <li><AnchorLink offset={50} href='#about'><p onClick={()=> setMenu('about')}>About Me {menu==='about' && <div className={'underline'}></div>}</p></AnchorLink></li>
        <li><AnchorLink offset={50} href='#services'><p onClick={()=> setMenu('services')}>Services {menu==='services' && <div className={'underline'}></div>}</p></AnchorLink></li>
        <li><AnchorLink offset={50} href='#projects'><p onClick={()=> setMenu('projects')}>Projects {menu==='projects' && <div className={'underline'}></div>}</p></AnchorLink></li>
        <li><AnchorLink offset={50} href='#contact'><p onClick={()=> setMenu('contact')}>Contact {menu==='contact' && <div className={'underline'}></div>}</p></AnchorLink></li>
      </ul>
      <AnchorLink href='#footer'><div className="nav-connect">Connect With Me</div></AnchorLink>
    </div>
  )
}

export default Navbar;