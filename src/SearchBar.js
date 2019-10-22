import React from 'react'
import { useHistory } from "react-router-dom";
import './App.css'


function SearchBar({searchBooks}){
    
    let history = useHistory();

    function handleClick() {
        history.push("/");
    }

    function handleSearchTextChange (e) {
        searchBooks(e.target.value);
    }

    return(
        <div className="search-books-bar">
            <button className="close-search" onClick={handleClick}>Close</button>
            <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={handleSearchTextChange}/>
            </div>
        </div>)   
}
export default SearchBar

