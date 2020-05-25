import React, {useState, useEffect} from 'react';
//import AddProviderForm from '../AddProviderForm';
import Providers from '../Providers';
import Materials from '../Materials';
import AddProviderButton from '../AddProviderButton';
import AddMaterialButton from '../AddMaterialButton';

function ProvidersView(){
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
            {/*<AddProviderForm/>*/}
            <AddProviderButton/>
            <Providers/>
            <Materials/>
            <AddMaterialButton/>

        </div>
    )
}
export default ProvidersView;