import React, {useState, useEffect} from 'react';
//import AddProviderForm from '../AddProviderForm';
import Semesters from '../Semesters';
import Materials from '../Materials';
import AddProviderButton from '../AddProviderButton';
import AddMaterialButton from '../AddMaterialButton';
import AddSemesterForm from '../AddSemesterForm';
import TokenRefresh from '../TokenRefresh';

function SemestersView(){
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
            {/*<AddProviderButton/ boton para agregar semestre>
            <Providers/ semestres registrados>*/}
            <Semesters/>
            <AddSemesterForm/>
            <TokenRefresh reviewTime={3600000} /> 

        </div>
    )
}
export default SemestersView;