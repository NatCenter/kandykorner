import React, {useState,useEffect} from "react"
import { useHistory } from "react-router-dom"

export const NewEmployee=()=>{
    const [employee,change]=useState({
        name:"",
        hourlyRate:"",
        locationId:"",
        Manager:false,
        fullTime:false
    })
    const histroy=useHistory()
const hireEmployee=(evt)=>{
    evt.preventDefault()
    
    const newEmployees={

        name:employee.name,
        hourlyRate:parseInt( employee.hourlyRate),
        locationId:parseInt( employee.locationId),
        Manager:employee.Manager,
        fullTime:employee.fullTime

    }
        

    

    const fetchOption={
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify( newEmployees)
    }
    return fetch("http://localhost:8088/employees?_expand=location", fetchOption)
    .then(() => {
        histroy.push("/employee")
    })
}


    return (
        <>
        <h1>New Employee</h1>
      
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.name = evt.target.value
                                change(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Full name"
                         />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Hourly Rate:</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.hourlyRate = evt.target.value
                                change(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        
                         />
                </div>
                <div className="form-group">
                   <label>
                Location:
                <select 
                    onChange={
                        (evt)=>{
                            const copy = {...employee}
                            copy.locationId = evt.target.value
                            change(copy)
                        }
                    }
                >
                    <option value={1} >616 split rail</option>
                    <option value={2}>1113 Murfreesboro Rd</option>
                    <option value={3}>2126 Abbott Martin Rd</option>
                </select>

                   </label>
                    </div>
                <div className="form-group">
                    <label htmlFor="Manager">Manager:</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.Manager = evt.target.checked
                                change(copy)
                            }
                        }
                        required autoFocus
                        type="checkbox"
                        className="form-control"
                        
                         />
                </div>
                <div className="form-group">
                    <label htmlFor="Full Time">Full Time:</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.fullTime = evt.target.checked
                                change(copy)
                            }
                        }
                        required autoFocus
                        type="checkbox"
                        className="form-control"
                        
                         />
                </div>
               < button onClick={hireEmployee}  className="btn btn-primary">
                Hire Employee
            </button>
        
        </>

    )
    

}