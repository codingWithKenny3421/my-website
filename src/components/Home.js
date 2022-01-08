import React from 'react'
import Me from '../assets/portfolioImg.png'
import slapFaceImg from '../assets/slapFace.png'
import cssLogo from '../assets/cssLogo.png'
import htmlLogo from '../assets/htmlLogo.png'
import jsLogo from '../assets/jsLogo.png'
import pythonLogo from '../assets/python.png'
import './Home.css'
import { useState } from 'react'

const Home = () => {
    const [slapFace, setSlapFace] = useState(false)
    
    function slapMyFace(){
        setTimeout(() => {
            setSlapFace(!slapFace)
        },50)
    }

    function showDim(){
        alert(`Width: ${window.innerWidth}
               Height: ${window.innerHeight}`)

               console.log(`Width: ${window.innerWidth}
               Height: ${window.innerHeight}`)
    }

  

    return (
        <div>
            <div className = 'home' id = 'home'>
                <div className = 'wrapper'>
                        <img alt = '' src = {slapFace ? slapFaceImg : Me } className = 'myFace'></img>
                     <br/>
                     <p className = 'about_me_details'><span className = 'bold'>Hello!</span> I learned to code at 12 and am now aspiring to become a <span className ='bold'>Junior Fullstack Developer</span> after Highschool. I also run the Youtube Channel <span className='bold'>Coding With Kenny</span></p>
                     <br/>
                     <button className = 'slapButton' onClick = {showDim}>Slap Me</button>
                     <br/>
                </div>
            </div>
            
        </div>
    )
}

export default Home