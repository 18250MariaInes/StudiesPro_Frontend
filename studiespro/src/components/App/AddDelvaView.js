import React, {useState, useEffect} from 'react';
import AddDelvaForm from '../AddDelvaForm';
import Delvas from '../Delvas';
import AddDelvaButton from '../AddDelvaButton';
import TokenRefresh from '../TokenRefresh';

function AddDelvaView(){
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
            <AddDelvaForm/>
            <TokenRefresh reviewTime={3600000} />             
        </div>
    )
}
export default AddDelvaView;