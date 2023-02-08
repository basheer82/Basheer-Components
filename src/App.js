import React, {useEffect, useState} from 'react'
import { useGlobalContext } from './context';
import './index.css';

import Sidebar from './Sidebar';
import { BiMenu } from "react-icons/bi";

function App() {

const{hovered,setHovered, handleClick} = useGlobalContext()
const[firstTxt, setFirstTxt] = useState('')
const[secondTxt, setSecondTxt] = useState('')
const firstText  = 'Basheer'
const secondText = 'Full Stack Web Developer | Web Designer'

const[i,setI] = useState(0)


const[j, setJ] = useState(0)
useEffect(()=>{
  const typeWriter = setTimeout(()=>  {
  
      if(i < firstText.length){
  
          setFirstTxt(`${firstTxt}` + ` ${firstText.charAt(i)}`)}
          setI(i + 1)
      
      
    
      if(j < secondText.length){
        if(secondText.charAt(i) == ' '){
            setSecondTxt(`${secondTxt}`+ `${'\xa0\xa0\xa0'}`  )
        }
        else{
        setSecondTxt(`${secondTxt}` + ` ${secondText.charAt(j)}`)}
        setJ(j + 1)
    
    }
  },150)
  return () => clearTimeout(typeWriter);
  })
  return (
    <>
    <div className = 'appContainer'>
    <div   className = 'title'>
          {firstTxt}
        </div>
        <div className = 'title'>{secondTxt}</div>
      
    <div className="container">
  <BiMenu 
      onClick = {()=>setHovered(!hovered)}
      className = {`${hovered ? 'menuIconHovered':'menuIcon'}`}
      />
  
    </div>

  
    </div>
    </>

  );
}

export default App;
