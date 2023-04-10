import React, { useEffect, useState } from 'react';
import { getpatient,addpatient } from './services/ApiService';
import AddPatient from './AddPatient';

const PatientList = () => {
    const [patients, setPatients] = useState([])
    const [showAddPatientForm,setShowAddPatientForm]=useState(false)
    useEffect(() => {
        let mount = true
        getpatient()
        .then(res => {console.log("res from api",res)
            setPatients(res)
            return()=>mount=false
        })
    }, [])
    
    const handleAddSubmit = (e) => {
        console.log(e)
        addpatient(e.target)
        .then(res => {
            setPatients(res)
            console.log(res)
        })
    }
    return (
        <>
            
            <h3>PATIENT LIST</h3>
            <table border={"2px"} cellPadding={"10px"}>
                <thead>
                    <tr>
                        <td>First name</td>
                        <td>Last name</td>
                        <td>Blood Group</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {patients.map(patient => {
                        return <tr key={patient.patient_id}>
                        <td>{patient.first_name }</td>
                        <td>{patient.last_name }</td>
                        <td>{patient.blood }</td>
                        <td><button>Edit</button> <button>Delete</button></td>
                    </tr>
                    })}
                    
                </tbody>
            </table>
             <button onClick={()=>setShowAddPatientForm(true)}>Add New patient</button>
             {showAddPatientForm && <AddPatient handleAddSubmit={handleAddSubmit}></AddPatient>}
        </>
    );
};

export default PatientList;