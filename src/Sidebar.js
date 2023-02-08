import React from "react";
import {useState, useRef, useEffect} from 'react'
import { FiX } from "react-icons/fi";
import { useGlobalContext } from "./context";

const Sidebar = ()=>{
    const firstButton = useRef(null)
    const secondButton = useRef(null)
    const {hovered, setHovered} = useGlobalContext()
    const[scroller, setScroller] = useState('')

    const handleCloseClick = ()=>{
        setHovered(!hovered)
    
    }
    useEffect(()=>{
        console.log(scroller)
        const handleScroll = (event) =>
        
        {
            console.log('sidebar ' + window.scrollY)
            if(window.scrollY < 380){
                firstButton.current.classList.add('sidebarListAfter')
                secondButton.current.classList.remove('sidebarListAfter')
            // setScroller('a')

        }
        else  {
            firstButton.current.classList.remove('sidebarListAfter')
            secondButton.current.classList.add('sidebarListAfter')
            // setScroller('b')
        }
    }
    window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll);
            };
    },[])

    return(
    <div className =  {`${hovered ? 'sidebarDisplay' : 'sidebar'}`}>
        <FiX
            className = 'closeBtn'
            onClick = {handleCloseClick}
            />
                <div className = 'sidebarButtons'>
        
                <button  ref = {firstButton} className =' sidebarList '>About me</button>
                <button ref = {secondButton} className =' sidebarList '>My Work</button>
                <button className =' sidebarList '>Contact</button>
                </div>

    
        </div>
    )
}
export default Sidebar