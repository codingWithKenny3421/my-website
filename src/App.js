import './index.css'
import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Expertise from './components/Expertise'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Menu from './components/Menu'
import ProjectDescription from './components/ProjectDescription'
import Intro from './components/Intro'

function App () {
  const [toggleMenu, setToggleMenu] = useState(false)

 return(
   <div className = 'app'>
     <Header toggleMenu = {toggleMenu} setToggleMenu = {setToggleMenu}/>
     <div className="sections">
       <Intro/>
     <Home/>
     <Menu toggleMenu = {toggleMenu} setToggleMenu = {setToggleMenu}/>
     {/* <AboutLeft/> */}
     <Expertise/>
<ProjectDescription/>
     <Projects/>
     <Contact/>
  
     </div>

   </div>
 )
}



export default App;