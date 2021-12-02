import React from "react";
import "./Counter.scss";

const Counter = () => {

  console.log("hello word")

  return (
    <div className="counterContainer">
      <h3 className = "counterContainer__Title">Counter</h3>
      <h3 className ="counterContainer__Value"> 0</h3>
      
      <div className ="counterContainer__btnContainer">
        <button>-</button>
        <button>+</button>
      </div>
    </div>
  )
}

export default Counter;
