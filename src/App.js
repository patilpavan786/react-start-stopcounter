import React,{useState} from "react";
import "./style.css";

export default function App() {
  const [seconds , setSeconds] = useState(0)
  const [minutes , setMinutes] = useState(0)
  const [hours , setHours] = useState(0)
  const [isActive , setIsActive] = useState(true)

  function startTimer(){
    if(isActive){
      setSeconds(seconds+1)
      if(seconds == 59){
        setSeconds(0)
        setMinutes(minutes+1)
      }else if(minutes == 59){
        setMinutes(0)
        setHours(hours+1)
      }else if(hours == 2){
        setSeconds(0)
        setMinutes(0)
        setHours(0)
      }
  }
}

const myinterval = setTimeout(()=>{ 
    startTimer()
  },1000)

  function handlePause(){
    setIsActive(!isActive)
    clearTimeout(myinterval)
  }

  function handleReset(){
    setSeconds(0)
    setMinutes(0)
    setHours(0)
  }

  return (
    <div className="main"> 
      <h4 className="timer">{hours} : 
      {minutes<10?'0'+minutes:minutes} : 
      {seconds<10?'0'+seconds:seconds}</h4> 
      <div className="btnWrap">
      <button className='btn' onClick={handlePause}>{isActive ? "Pause" : "Resume"}</button>
      <button  className="btn" onClick={handleReset}>Reset</button>
     </div>
    </div>
  );
}
