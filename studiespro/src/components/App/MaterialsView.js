import React, {useState, useEffect} from 'react';
//import AddProviderForm from '../AddProviderForm';
import Materials from '../Materials';
import AddMaterialButton from '../AddMaterialButton';
import TokenRefresh from '../TokenRefresh';

function MaterialsView(){
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
            <Materials/>
            <AddMaterialButton/>
            <TokenRefresh reviewTime={3600000} /> 

        </div>
    )
}
export default MaterialsView;