import React from "react";
import "./App.css";
import Book from "./Book";

class BookShelf extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map(book => (
              <li key={`li_${book.id}`}>
                <Book
                  key={book.id}
                  title={book.title}
                  authors={book.authors}
                  cover={book.imageLinks && book.imageLinks.smallThumbnail}
                  book={book}
                  updateTheBook={this.props.updateTheBook}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
