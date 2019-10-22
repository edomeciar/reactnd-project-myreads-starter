import React from 'react'
import './App.css'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'
import { getAll, update } from './BooksAPI'

class Bookcase extends React.Component {
    state={
        books: [],
        shelfs: [
            {
                value:'currentlyReading',
                label:'Currently Reading'
            },
             {
                value:'wantToRead',
                label:'Want to Read'
            },
             {
                value:'read',
                label:'Read'
            },
            ],
    }

  componentDidMount() {
    this.loadTheBooks();
  }

  loadTheBooks() {
    getAll().then((books) => this.setState({books}));
  }

  updateTheBook = (book,shelf) => {
    update(book,shelf).then(
      this.loadTheBooks()
    );
  }
  
  
  render() {
    return(
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {this.state.shelfs.map(shelf => (
                    <BookShelf 
                      key={shelf.label} 
                      title={shelf.label} 
                      books={this.state.books.filter(book => book.shelf === shelf.value)}
                      updateTheBook={this.updateTheBook} />
                ))}
              </div>
            </div>
            <Link to='/search' className='open-search'>
              <button>Add a book</button>
            </Link>
        </div>
    )
    }
  }

export default Bookcase