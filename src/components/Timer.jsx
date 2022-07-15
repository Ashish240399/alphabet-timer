import React, { useContext, useEffect, useRef, useState } from 'react'
import { TimerContext } from '../context/TimerContext'

export const Timer = () => {
    const {start}=useContext(TimerContext)
    const {pause}=useContext(TimerContext)
    const {penalty}=useContext(TimerContext)
    const {changePenalty}=useContext(TimerContext)
    const {status}=useContext(TimerContext)
    //const [mlsec,setMlsec]=useState("000");
    const [time,setTime]=useState(0);
    const {bestTime}=useContext(TimerContext);
    const counterRef=useRef(null);
    useEffect(()=>{
        if(start===true && pause===true){
            clearInterval(counterRef.current);
            if(bestTime==null){
                status("Success!")
                localStorage.setItem("best-time",time);
            }
            else{
                if(+time<+bestTime){
                    status("Success!")
                    localStorage.setItem("best-time",time);
                }
                else{
                    status("Failure!")
                }
            }
        }
        else if(start===true){
            counterRef.current=setInterval(()=>{
                setTime((prev)=>prev+10)
            },10)
        }
        else if(start===false){
            clearInterval(counterRef.current);
            setTime(0);
        }
    },[start,pause]);
    useEffect(()=>{
        
        if(penalty){
            setTime((prev)=>prev+500);
        }
        changePenalty(false);
    },[penalty==true]);
  return (
    <div style={{textAlign:"center"}}>
        
        <div style={{fontSize:"17px"}}>
        
            <span>Time : {((Math.floor(time/1000)))}.</span>
            <span>{("00"+(Math.floor(time/1)%1000)).slice(-3)}s</span>
        </div>
        <div>
            <p style={{fontSize:"13px"}}>
                my best time : {bestTime===null?"0.000":(+bestTime/1000).toFixed(3)}s!
            </p>
        </div>
    </div>
  )
}
