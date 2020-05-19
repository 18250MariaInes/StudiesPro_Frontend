import React, {useState, useEffect} from 'react';
import LoginForm from '../LoginForm';


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
            <h1 className="home-title">Studies Pro</h1>
            <img 
            src="https://i.redd.it/1procftja2s21.jpg"
            alt="new" className="foto-home"
            />
        </div>
    )
}
export default Home;