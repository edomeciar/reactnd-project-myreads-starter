import React from 'react'
import './App.css'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class Bookcase extends React.Component {
    state={
        Books: [
            {
                title: 'Test',
                author: 'test author',
                cover: 'http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api',
                shelf: 'read'
            }
        ],
        Shelfs: [
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
             {
                value:'none',
                label:'None'
            },
            ],
    }

  const 

  render() {
    return(
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {this.state.Shelfs.map(shelf => (
                    <BookShelf title={shelf.label} books={this.state.Books.filter(book => book.shelf === shelf.value)} />
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