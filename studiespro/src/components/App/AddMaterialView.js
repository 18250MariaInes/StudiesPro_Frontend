import React, {useState, useEffect} from 'react';
import AddMaterialForm from '../AddMaterialForm';
import Providers from '../Providers';
import AddProviderButton from '../AddProviderButton';

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
            <AddMaterialForm/>
           
            
        </div>
    )
}
export default AddMaterialView;