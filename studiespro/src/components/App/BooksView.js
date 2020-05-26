import React, {useState, useEffect} from 'react';
import Books from '../Books';
import AddBookButton from '../AddBookButton';
import './styles.css';
import TokenRefresh from '../TokenRefresh';

function BooksView(){
    useEffect(() => {
        fetchItems();
    }, []);
    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
        const items = await data.json();
        console.log(items);
    }
    return (
        <div className="book-view">
            {/*<AddBookForm/>*/}
            <AddBookButton/>
            <Books/>
            <TokenRefresh reviewTime={3600000} /> 
        </div>
    )
}
export default BooksView;