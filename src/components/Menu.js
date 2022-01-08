import React from 'react'
import './Menu.css'
const Menu = ({toggleMenu, setToggleMenu}) => {
    return (
        <div className = {'menu ' + (toggleMenu && 'active')}>
            <ul>
                <a href = '#home'><li>Home</li></a>
                <a href = '#projects'><li>Projects</li></a>
                <a href = '#contact'><li>Contact</li></a>
                <a href = 'https://www.youtube.com/channel/UCWJV1nhZSRqS58vZQS2xP5A/featured'><li>My Channel</li></a>
            </ul>
            
        </div>
    )
}

export default Menu