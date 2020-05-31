import React, {useState, useEffect} from 'react';
import AddBookForm from '../AddBookForm';
import Books from '../Books';
import Courses from '../Courses';
import AddBookButton from '../AddBookButton';
import TokenRefresh from '../TokenRefresh';
import UpdateExamForm from '../UpdateExamForm';

function UpdateExamView(){
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
            <Courses/>
            <UpdateExamForm/>
            <TokenRefresh reviewTime={3600000} />          
            
        </div>
    )
}
export default UpdateExamView;