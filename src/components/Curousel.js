import React ,{useState,useEffect, useRef} from 'react'

import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const Curousel = ()=>{

const carousel = useRef(null)

const[counter, setCounter] = useState(0)


    const handlePrevClick = ()=>{

    console.log('prev counter' + counter)
        
        carousel.current.style.marginLeft = `${-21 * (counter-1)}rem`
        if(counter >1){
            setCounter(counter - 1)
        
            }
    }

    const handleNextClick = ()=>{

            console.log('next counter' + counter)
        
                carousel.current.style.marginLeft = `${(-21 * (counter+1))}rem`
                if(counter<=4){
                    setCounter(counter+1)
                }
            
    }
    return(<>
    <div className = 'lastDiv'>
    
    <button onClick = {()=>handlePrevClick()} className = 'curouselLeftBtn'><AiFillCaretLeft/></button>
    <div className = 'curouselContainer'>


    <div className = 'welcomeCardsContainer'>
            <div  ref = {carousel}  className = 'welcome-container'> 

                <div  className = 'welcomeCard'>
                    1 Web Design
                </div>
                <div className = 'welcomeCard'>
                    2 Web Developmen
                </div>
                <div className ='welcomeCard'>
                    3 Web Support
                </div>
                <div className = 'welcomeCard'>
                    4 No Bugs' 
                </div>
                <div className = 'welcomeCard'>
                    5 design your web
                </div>
                <div className = 'welcomeCard'>
                    6 Web Developmen
                </div>
                <div className ='welcomeCard'>
                    7 Support your web from 
                </div>
                <div className = 'welcomeCard'>
                    8 site will be work 100%
                </div>
                
            </div>
            </div>
            <button onClick = {()=>handleNextClick()} className = 'curouselRightBtn'><AiFillCaretRight/></button>
            </div>
            </div>
    </>)
}
export default Curousel