import React from "react";
import SearchBar from "./SearchBar";
import SearchOutput from "./SearchOutput";
import "./App.css";
import { search, update } from "./BooksAPI";

class Search extends React.Component {
  state = {
    books: [],
    error: false
  };

  searchBooks = searchString => {
    try {
      search(searchString).then(books => {
        if (books && books.error) {
          this.setState({ books: [] });
          this.setState({ error: true });
        } else {
          this.setState({ books });
        }
      });
    } catch (error) {
      this.setState({ books: [] });
      this.setState({ error: true });
    }
  };

  updateTheBook = (book, shelf) => {
    update(book, shelf).then(console.log("book added"));
  };

  render() {
    return (
      <div className="search-books">
        <SearchBar searchBooks={this.searchBooks} />
        {this.state.error ? (
          <div>Error loading</div>
        ) : (
          <SearchOutput
            books={this.state.books}
            updateTheBook={this.updateTheBook}
          />
        )}
      </div>
    );
  }
}

export default Search;
