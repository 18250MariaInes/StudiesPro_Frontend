import React, {useState, useEffect} from 'react';
//import AddSshipeventForm from '../AddSshipeventForm';
import Sshipevents from '../Sshipevents';
import AddSshipeventButton from '../AddSshipeventButton';
import TokenRefresh from '../TokenRefresh';
import UpdateSshipeventButton from '../UpdateSshipeventButton';

function SshipeventsView(){
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
            <AddSshipeventButton/>
            <Sshipevents/>
            <UpdateSshipeventButton/>
            <TokenRefresh reviewTime={3600000} /> 
        </div>
    )
}
export default SshipeventsView;