import React, {useState, useEffect} from 'react';
import AddProviderForm from '../AddProviderForm';
import AddMaterialForm from '../AddMaterialForm';
import Providers from '../Providers';
import AddProviderButton from '../AddProviderButton';
import TokenRefresh from '../TokenRefresh';

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
            <TokenRefresh reviewTime={3600000} />         
        </div>
    )
}
export default AddProviderView;