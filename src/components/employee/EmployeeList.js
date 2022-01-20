import React, {useState,useEffect} from "react"
import { useHistory } from "react-router-dom";
import {NewEmployee} from "./NewEmployee"

export const EmployeeList = () => {

  const [employees,listOFEmployees]=useState([])
  const [location,foreignKey]=useState("")
  const history=useHistory()
    
    useEffect(()=>{
      fetch('http://localhost:8088/employees?_expand=location')
      .then(data=>data.json())
      .then((data)=>{listOFEmployees(data)})
    },[])
    const fireEmployees= (id) => {
      fetch(`http://localhost:8088/employees/${id}`, {
          method: "DELETE"
          
      })
      .then(
          ()=>{
              history.go("/employees/")
          }
      )
  }

  return (
    <>
      
      { 
        employees.map((employeeObject)=>{
              return <p>{employeeObject.name} {employeeObject.hourlyRate} Manager:{employeeObject.Manager.toString()} Full time:{employeeObject.fullTime.toString()} {employeeObject.location.address} <button onClick={()=>{
                fireEmployees(employeeObject.id)
              }}>Fire Employee</button> </p>

        })
      }

<button onClick={()=>history.push("/NewEmployee")} className="btn btn-primary">New Employee </button>
    </>
  );
};
