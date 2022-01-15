import React, {useState,useEffect} from "react"
import { useHistory } from "react-router-dom";
import {NewEmployee} from "./NewEmployee"

export const EmployeeList = () => {

  const [employees,listOFEmployees]=useState([])
  const [location,foreignKey]=useState("")
  const histroy=useHistory()
    
    useEffect(()=>{
      fetch('http://localhost:8088/employees?_expand=location')
      .then(data=>data.json())
      .then((data)=>{listOFEmployees(data)})
    },[])


  return (
    <>
      
      { 
        employees.map((employeeObject)=>{
              return <p>{employeeObject.name} {employeeObject.hourlyRate} Manager:{employeeObject.Manager.toString()} Full time:{employeeObject.fullTime.toString()} {employeeObject.location.address}</p>

        })
      }

<button onClick={()=>histroy.push("/NewEmployee")} className="btn btn-primary">New Employee </button>
    </>
  );
};
