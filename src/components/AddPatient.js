import React from 'react';

const AddPatient = (props) => {
    return (
        <>
            <h3>Add Form:</h3>
            <form onSubmit={props.handleAddSubmit}>
                First name <input type='text' name='first_name' />
                Last name <input type='text' name='last_name' />
                Blood Group <input type='text' name='blood' />
                <button type='submit'>Add</button>
            </form>
        </>
    );
};

export default AddPatient;