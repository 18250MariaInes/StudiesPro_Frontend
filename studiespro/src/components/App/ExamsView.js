import React, {useState, useEffect} from 'react';
//import AddSshipeventForm from '../AddSshipeventForm';
import Exams from '../Exams';
import AddExamButton from '../AddExamButton';
import TokenRefresh from '../TokenRefresh';

function ExamsView(){
    useEffect(() => {
        fetchItems();
    }, []);
    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
        const items = await data.json();
        console.log(items);
    }
    return (
        <div>
            {/*<AddSshipeventForm/>*/}
            <AddExamButton/>
            <Exams/>
            <TokenRefresh reviewTime={3600000} /> 
        </div>
    )
}
export default ExamsView;