import React from "react";
import "./App.css";
import Book from "./Book";

class SearchOutput extends React.Component {
  render() {
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {this.props.books && this.props.books.map(book => (
            <li key={`li_${book.id}`}>
              <Book
                key={book.title}
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
    );
  }
}

export default SearchOutput;
