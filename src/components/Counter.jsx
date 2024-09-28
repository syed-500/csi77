import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
export default function Counter({ number, title }) {
    const[counterOn,setCounterOn]=useState(false);
  return (
    <div className="text-sm sm:text-[20px]" >
        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
      {counterOn && <CountUp duration={2} className="counter" end={number} />}
      <p> </p>
      <span>{title}</span>
      </ScrollTrigger>
    </div>
  );
}
