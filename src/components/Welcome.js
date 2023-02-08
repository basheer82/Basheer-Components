import React, {useState,useRef, useEffect} from 'react'

const Welcome = ()=>{


    const refContainer = useRef(null);
    const refContainers = useRef(null)
    const [distance,setDistance] = useState(0)
    const[contentNo, setContentNo] = useState(0)
    const content = ['Web development','web design ']
    const[txt1, setTxt1] = useState('')
    const [txt2, setTxt2] = useState('')
    const[txt3, setTxt3] = useState('')
    const [i, setI] =useState(0)
    const text1 = ''
    const text2 = ''
    const text3 = ''


    const [contentNumber, setContentNumber] = useState(0)

    useEffect(() => {
        const handleScroll = event => {
        // console.log('window.scrollY', window.scrollY);
        setDistance(window.scrollY)
            // console.log('distance', distance)
          if(window.scrollY * 3.3 <= 900){
          refContainer.current.style.transform = `translateY(${window.scrollY * 3.5}px)`
          refContainers.current.style.transform = `translateY(${window.scrollY * 2.}px)`
            }
            if(window.scrollY <500){
                setContentNumber(0)
            }
            else if(window.scrollY>500)
            {setContentNumber(1)}
            
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(()=>{
        if(contentNumber === 0){
            setContentNo(0)
        }
        else{
            setContentNo(1)
        }
    },[contentNumber])
    
    return(<>
        <div  className = 'welcome'>
        <div className = 'section'>
    
            <div  className='welcomeIntroduction'>
            <div className = 'welcomeDiv'>
            I spend most of my time learning new web development tools, 
                developing and designing web pages
            </div>
            <div className = 'welcomeDiv'>
            Typically i like coding, desiging, learning new programming topics
            </div>
            <div className = 'welcomeDiv'>
            Bachelor of Computer Information Systems  - Zarka University
            </div>
            <div className = 'welcomeDiv'>

            </div>
        
        </div>
        </div>
            <div ref = {refContainer} className ='scroll'>

            <div className= 'advantage'  >{`${content[contentNo]}`} </div>
        
            </div>
            </div>
            
        </>
    )
}
export default Welcome