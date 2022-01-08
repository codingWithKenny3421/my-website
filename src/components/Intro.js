import { useRef, useEffect } from 'react'
import { init } from 'ityped'
import './Intro.css'
import svg from '../assets/introSvgImage.svg'
const Intro = () => {
    const roleRef = useRef()
    useEffect(() => {
    init(roleRef.current, {
        showCursor:true,
        backSpeed:100,
        typeSpeed:100,
        backDelay:100,
        strings: ['Highschooler', 'Youtuber', 'Creative Coder']
    })
    }, [])
    return (
        <div className = 'intro'>
            <p className = 'intro_my_name'>Kenny Malis</p>
         <div className = 'text-animation'><p className = 'role' ref = {roleRef}></p></div>
            <br/>
            <img alt = '' src = {svg} className = 'introSvg'/>
        </div>
    )
}


export default Intro
