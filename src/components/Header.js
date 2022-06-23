import '../style/Header.css'
import React from "react";
import logo from '../assets/logo.png'

const Header = () => {

    return (
        <div className='header'>
            <img src={logo} alt='logo' className='logo'/>
            <div className='shop-name'>Steam</div>
        </div>
    )
}

export default Header;