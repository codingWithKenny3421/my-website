import React, { useState, useEffect }from 'react'
import { AiFillAndroid } from "react-icons/ai";
import './Header.css'


const Header = ({toggleMenu, setToggleMenu}) => {
    //  const [toggleIcon, setToggleIcon] = useState(false)

     function toggleMenuFunc(){
         setToggleMenu(!toggleMenu)
     }


     
    function sendToYoutube() { 
        window.open('https://www.youtube.com/channel/UCWJV1nhZSRqS58vZQS2xP5A/featured')
    }
    return (
        <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
            <div className ='header'>
                
                     <AiFillAndroid className ='androidIcon'/>
                <div className = 'myName'>Coding With Kenny</div>
                <div className = 'searchBarContainer'>
                <input className ='searchBar' placeholder = 'Search...' />
                </div>
                <ul className='navLinks'>
                    <li><a href ='#home'>Home</a></li>
                    <li><a href = '#projects'>Projects</a></li>
                    <li><a href ='#contact'>Contact</a></li>
                </ul>
                
                    <div className = {'toggleMenu ' + (toggleMenu && 'active')} onClick = {toggleMenuFunc}>
                    <div className = {'line line1 ' + (toggleMenu && 'active')}></div>
                    <div className = {'line line2 ' + (toggleMenu && 'active')}></div>
                    <div className = {'line line3 ' + (toggleMenu && 'active')}></div>
                </div>
            </div>
            
        </div>
    )
}



export default Header