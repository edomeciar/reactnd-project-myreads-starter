
import React from 'react'
import './App.css'

class SearchOutput extends React.Component {
    props = {
        books: [],
    }
    render(){
       return(
        <div className="search-books-results">
            <ol className="books-grid"></ol>
        </div>)
    }
}


export default SearchOutput

