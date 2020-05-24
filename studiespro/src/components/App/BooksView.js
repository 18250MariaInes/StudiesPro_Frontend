import React, {useState, useEffect} from 'react';
import Books from '../Books';
import AddBookButton from '../AddBookButton';

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
        <div>
            {/*<AddBookForm/>*/}
            <AddBookButton/>
            <Books/>
        </div>
    )
}
export default BooksView;