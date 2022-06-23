import '../style/Header.css'
import React from "react";

const Header = () => {

    return (
        <div className='header'>
            <img src='./assets/logo.png' alt='logo' className='logo'/>
            <div className='shop-name'>Steam</div>
        </div>
    )
}

export default Header;