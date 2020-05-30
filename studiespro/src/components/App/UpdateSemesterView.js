import React, {useState, useEffect} from 'react';
import TokenRefresh from '../TokenRefresh';
import UpdateSemesterForm from '../UpdateSemesterForm';

function UpdateSemesterView(){
    useEffect(() => {
        fetchItems();
    }, []);
    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
        const items = await data.json();
        console.log(items);
    }
    return (
        <div >
            <UpdateSemesterForm/>
            <TokenRefresh reviewTime={3600000} />          
            
        </div>
    )
}
export default UpdateSemesterView;