import React from 'react'
import './App.css'
import Book from './Book'

class BookShelf extends React.Component {
  render() {
    return(
    	<div className="bookshelf">
        	<h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
            	<ol className="books-grid">
      				{this.props.books.map(book => (
      					<li>
      					<Book title={book.title} authors={book.authors} cover={book.cover} />
						</li>
                        ))}	
    			</ol>
            </div>
        </div>)
    }
  }

export default BookShelf