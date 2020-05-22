import React, {useState, useEffect} from 'react';
import AddTeacherForm from '../AddTeacherForm';
import TeacherList from '../TeacherList';


function Home(){
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
            <AddTeacherForm/>
            <h1 className="home-title">Studies Pro</h1>
            <TeacherList/>
        </div>
    )
}
export default Home;