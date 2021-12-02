import React from 'react';
import "./EmployeeContainer.scss";
import Counter from '../Counter/Counter';

const EmployeeContainer = (props) => {
  const {name , role} = props
return (
  <div className ="employeeContainer">
    <h2 className ="employeeContainer__nameText">{name}</h2>
    <h3 className ="employeeContainer__roleText" >{role}</h3>
    
    <Counter />
    
  </div>
)
};

export default EmployeeContainer