import React, {useState, useEffect} from 'react';
import AddBookForm from '../AddBookForm';
import Books from '../Books';
import AddBookButton from '../AddBookButton';

function AddBookView(){
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
            <AddBookForm/>
           
            <h1 className="home-title">Studies Pro</h1>
            
        </div>
    )
}
export default AddBookView;