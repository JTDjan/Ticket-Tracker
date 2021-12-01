import React from 'react';
import "./EmployeeContainer.scss";

const EmployeeContainer = (props) => {
  const {name , role} = props
return (
  <div className ="employeeContainer">
    <h2 className ="employeeContainer__nameText">{name}</h2>
    <h3 className ="employeeContainer__roleText" >{role}</h3>

    <div className="employeeContainer__Counter">
      <h3 className = "employeeContainer__counterTitle">Counter</h3>
      <h3 className ="employeeContainer__counterValue"> 0</h3>
      
      <div className ="employeeContainer__btnContainer">
        <button>-</button>
        <button>+</button>
      </div>
    </div>
  </div>
)
};

export default EmployeeContainer