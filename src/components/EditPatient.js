import React from 'react';

const EditPatient = ({handleEditSubmit,selectedEditData}) => {
    return (
        <>
            <h3>Edit Form:</h3>
            <form onSubmit={(e)=>handleEditSubmit(e,selectedEditData.patient_id)}>
                First name <input type='text' name='first_name' defaultValue={selectedEditData.first_name}/>
                Last name <input type='text' name='last_name' defaultValue={selectedEditData.last_name}/>
                Blood Group <input type='text' name='blood' defaultValue={selectedEditData.blood}/>
                <button type='submit'>Edit</button>
            </form>
        </>
    );
};

export default EditPatient;