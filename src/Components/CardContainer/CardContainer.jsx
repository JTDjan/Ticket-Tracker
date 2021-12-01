import React from 'react';
import "./CardContainer.scss";
import EmployeeContainer from '../EmployeeContainer/EmployeeContainer';
import team from "../../data/Data.js";
console.log(team);


const CardContainer = () => {
  return <div className="cardContainer"> 

  { team.map(member => {
    return <EmployeeContainer name={member.name} role={member.role} />
  })}
    
  </div>
};

export default CardContainer;