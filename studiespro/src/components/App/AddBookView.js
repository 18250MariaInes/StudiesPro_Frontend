import React, {useState, useEffect} from 'react';
import AddBookForm from '../AddBookForm';
import Books from '../Books';
import AddBookButton from '../AddBookButton';
import TokenRefresh from '../TokenRefresh';

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
            <TokenRefresh reviewTime={3600000} />          
            
        </div>
    )
}
export default AddBookView;