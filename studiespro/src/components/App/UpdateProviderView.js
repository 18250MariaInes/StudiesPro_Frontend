import React, {useState, useEffect} from 'react';
import AddProviderForm from '../AddProviderForm';
import Providers from '../Providers';
import AddProviderButton from '../AddProviderButton';
import TokenRefresh from '../TokenRefresh';
import UpdateProviderForm from '../UpdateProviderForm';
function UpdateProviderView(){
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
            <UpdateProviderForm/>
            <TokenRefresh reviewTime={3600000} />          
            
        </div>
    )
}
export default UpdateProviderView;