import React, {useState, useEffect} from 'react';
import AddProviderForm from '../AddProviderForm';
import Providers from '../Providers';
import AddProviderButton from '../AddProviderButton';

function AddProviderView(){
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
            <AddProviderForm/>
           
           
            
        </div>
    )
}
export default AddProviderView;