import React from 'react'
import './App.css'

class Book extends React.Component {

  handleSelectClick = (e) => {
    this.props.updateTheBook(this.props.book, e.target.value)
  }

  render() {
    return(
    	<div className="book">
          <div className="book-top">
          	<div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url("${this.props.cover}")` }}></div>
              <div className="book-shelf-changer">
                <select onChange={this.handleSelectClick} value={this.props.book.shelf ? this.props.book.shelf : 'none'}>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
      		</div>
      	</div>
      	<div className="book-title">{this.props.title}</div>
      	<div className="book-authors">{this.props.authors}</div>
      </div>
	)
    }
}

export default Book