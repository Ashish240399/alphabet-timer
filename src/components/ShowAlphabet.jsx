import React, { useContext, useEffect, useState } from 'react'
import { TimerContext } from '../context/TimerContext';

export const ShowAlphabet = () => {
    const alphabets="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const {count}=useContext(TimerContext)
    const {storeStatus}=useContext(TimerContext);
    const {resetData}=useContext(TimerContext);
    const {changeResetData}=useContext(TimerContext);
    const [index,setIndex]=useState()
    const {givenAlphabet}=useContext(TimerContext)
    useEffect(()=>{
        if(count<=20){
            setIndex(Math.floor(Math.random()*26)+1);
        }
    },[count]);
    useEffect(()=>{
        if(resetData){
            setIndex(Math.floor(Math.random()*26)+1);
        }
        changeResetData(false)
    },[resetData])
    if(index){
        givenAlphabet(alphabets[index-1])
    }
    
  return (
    <div style={{width:"90%",backgroundColor:"white",height:"100px",margin:"auto",color:"green",display:"flex",justifyContent:"center",borderRadius:"10px",marginBottom:"30px",marginTop:"30px"}}>
        <h1 >{count<20?alphabets[index-1]:storeStatus}</h1>
    </div>
  )
}
