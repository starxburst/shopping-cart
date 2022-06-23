import React from "react";
import '../style/Home.css'
import homeLogo from '../assets/home.jpg'

function Home() {
    return (
        <div className="home-container">
            <img src={homeLogo} alt='Home Logo'/>
            <div className="home-text-container">
                <h1>Welcome to my shop</h1>
                <p>A walk-in-a-park online shopping experience!</p>
            </div>
        </div>
    )
}

export default Home;