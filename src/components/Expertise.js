import React from 'react'
import './Expertise.css'
import cssLogo from '../assets/cssLogo.png'
import htmlLogo from '../assets/htmlLogo.png'
import jsLogo from '../assets/jsLogo.png'
import pythonLogo from '../assets/python.png'
import nodeJsLogo from '../assets/nodeJsLogo.png'
import reactLogo from '../assets/reactLogo.png'
import vsCodeLogo from '../assets/vsCodeLogo.png'
const Expertise = () => {
    return (
        <div className = 'aboutRight'>
               <div className = 'rightInfo'>
                <h1>My Expertise</h1>
                <p className = 'extraInfo-2'></p>
                <div className = 'right'>
                     <div className = 'logoWrapper'>
            
                     <div className ='skillInfo cssInfo'>
                     <img src = {cssLogo} className = 'logo cssLogo'></img>
                     <br/>
                     <span className = 'logoLabel cssLabel'>CSS</span>
                     </div>

                     <div className = 'skillInfo htmlInfo'>
                     <img src = {htmlLogo} className = 'logo htmlLogo'></img>
                     <br/>
                     <span className = 'logoLabel htmlLabel'>HTML</span>
                     </div>

                     <div className = 'skillInfo jsInfo'>
                     <img src = {jsLogo} className = 'logo jsLogo'></img>
                     <br/>
                     <span className = 'logoLabel jsLabel'>Javascript</span>
                     </div>
                     
                     <div className = 'skillInfo pythonInfo'>
                     <img src = {pythonLogo} className = 'logo pythonLogo'></img>
                     <br/>
                     <span className = 'logoLabel pythonLabel'>Python</span>
                     </div>

                     <div className = 'skillInfo reactInfo'>
                     <img src = {reactLogo} className = 'logo reactLogo'></img>
                     <br/>
                     <span className = 'logoLabel reactLabel'>React.js</span>
                     </div>
                     <div className = 'skillInfo nodeJsInfo'>
                     <img src = {nodeJsLogo} className = 'logo nodeJsLogo'></img>
                     <br/>
                     <span className = 'logoLabel nodeLabel'>Node.js</span>
                     </div>

                     <div className = 'skillInfo vsCodeInfo'>
                     <img src = {vsCodeLogo} className = 'logo vsCodeLogo'></img>
                     <br/>
                     <span className = 'logoLabel vsCodeLabel'>Visual Studio</span>
                     </div>
           
                     </div>
                    </div>
            </div>
            
        </div>
    )
}

export default Expertise