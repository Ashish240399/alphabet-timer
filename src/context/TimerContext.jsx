import { createContext, useState } from "react";

export const TimerContext=createContext();
const TimerContextProvider=({children})=>{

    const [start,setStart]=useState(false);
    const [resetData,setResetData]=useState(false);
    const [pause,setPause]=useState(false);
    const [alpha,setAlpha]=useState();
    const [count,setCount]=useState(0);
    const [penalty,setPenalty]=useState(false);
    const [classInput,setClassInput]=useState("white");
    const bestTime=JSON.parse(localStorage.getItem("best-time"));
    const [storeStatus,setStoreStatus]=useState("Failure!")
    const startTyping=(val)=>{
        setStart(val)
        if(!val){
            setCount(0);
            setResetData(true)
        }
        if(val){
            setPause(false);
        }
    }
    const pauseTimer=(val)=>{
        setPause(val)
    }
    const givenAlphabet=(val)=>{
        setAlpha(val)
    }
    const inputAlpha=(val)=>{
        
        if(val===alpha){
            setCount(count+1);
            if(classInput!=="white"){
                setClassInput("white")
            }
            
        }
        else{
            setPenalty(true)
            if(classInput!=="red"){
                setClassInput("red");
            }
            
        }
    }
    const changePenalty=(val)=>{
        setPenalty(val)
    }
    const changeResetData=(val)=>{
        setClassInput("white")
        setResetData(val)
    }
    const status=(val)=>{
        setStoreStatus(val)
    }
    //console.log(alpha)
    return <TimerContext.Provider value={{startTyping,start,pauseTimer,pause,givenAlphabet,inputAlpha,count,penalty,changePenalty,changeResetData,resetData,bestTime,alpha,classInput,status,storeStatus}}>{children}</TimerContext.Provider>
}

export default TimerContextProvider;