import React, {useState, useEffect} from 'react';
import AddMaterialForm from '../AddMaterialForm';
import Providers from '../Providers';
import TokenRefresh from '../TokenRefresh';

function AddMaterialView(){
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
            <Providers/>
            <AddMaterialForm/>
            <TokenRefresh reviewTime={3600000} />             
        </div>
    )
}
export default AddMaterialView;