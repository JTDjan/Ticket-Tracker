import React, {useState} from "react";
import "./Counter.scss";


const Counter = () => {

  const [counter, setCounter] = useState(0)
  console.log(counter);

  const handleDecrement = () => {
    if (counter === 0){
      setCounter(0)
    } else {
      setCounter(counter - 1)
    }
   

  }

  const handleIncrement = () => {
    setCounter(counter + 1)
   
  }



  return (
    <div className="counterContainer">
      <h3 className = "counterContainer__Title">Counter</h3>
      <h3 className ="counterContainer__Value"> {counter}</h3>
      
      <div className ="counterContainer__btnContainer">
        <button onClick={handleDecrement} className ="counterContainer__btn">-</button>
        <button onClick={handleIncrement} className ="counterContainer__btn">+</button>
      </div>
    </div>
  )
}

export default Counter;
