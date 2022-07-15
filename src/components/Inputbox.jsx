import React, { useContext, useEffect, useState } from 'react'
import { TimerContext } from '../context/TimerContext'
import "./inputbox.css"
export const Inputbox = () => {
    const {startTyping}=useContext(TimerContext);
    const {classInput}=useContext(TimerContext);
    const {start}=useContext(TimerContext);
    const {pause}=useContext(TimerContext);
    const {inputAlpha}=useContext(TimerContext);
    const {pauseTimer}=useContext(TimerContext);
    const {count}=useContext(TimerContext);
    const [letter,setLetter]=useState();
    const [inputText,setInputText]=useState(false)
    if(count>=20){
        pauseTimer(true)
    }
    //const {pause}=useContext(TimerContext);
    useEffect(()=>{
        //console.log(letter)
        if(letter){
            inputAlpha(letter[letter.length-1]);
        }
        
    },[letter])
  return (
    <div>
        <input  type="text" className={classInput} placeholder={ start && pause?letter:"Start typing"} disabled={start && pause ?true:false} value={ inputText ||count>=20?"":letter} onChange={(e)=>{
            setLetter(e.target.value.toUpperCase());
            setInputText(false)
            if(!start){
                startTyping(!start);
            }
        }}/>
        <button style={{marginLeft:"10px"}} onClick={()=>{
            startTyping(false);
            setInputText(true);
        }}>Reset</button>
        <div className={`${classInput==="red"?"show":"dont"}`}>Correct the letter</div>
    </div>
  )
}
