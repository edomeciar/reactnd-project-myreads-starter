import React from 'react'
import { useHistory } from "react-router-dom";
import './App.css'


function SearchBar(){
    
    let history = useHistory();

    function handleClick() {
        history.push("/");
    }

    return(
        <div className="search-books-bar">
            <a className="close-search" onClick={handleClick}>Close</a>
            <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"/>
            </div>
        </div>)   
}
export default SearchBar

