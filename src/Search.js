import React from 'react'
import SearchBar from './SearchBar'
import SearchOutput from './SearchOutput'
import './App.css'

class Search extends React.Component {
    render(){
       return(
        <div className="search-books">
            <SearchBar/>
            <SearchOutput/>
          </div>)
    }
}


export default Search

