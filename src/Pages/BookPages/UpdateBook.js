import React, { Component, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class UpdateBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookId : "",
      bookName: "",
      bookType: "",
      author: "",
      categoryId: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .put("https://localhost:7292/api/Book/update", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { bookId, bookName, bookType, author, categoryId } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <div>
            <label>Book ID: </label>
            <input
              type="number"
              name="bookId"
              value={bookId}
              placeholder="Enter bookID"
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <label>Book Name: </label>
            <input
              type="text"
              name="bookName"
              value={bookName}
              placeholder="Enter book name"
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <label>Book Type: </label>
            <input
              type="text"
              name="bookType"
              value={bookType}
              placeholder="Enter Book Type"
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <label>Author: </label>
            <input
              type="text"
              name="author"
              placeholder="Enter Author"
              value={author}
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <label>CategoryId: </label>
            <input
              type="number"
              name="categoryId"
              value={categoryId}
              onChange={this.handleChange}
            ></input>
          </div>
          <button type="submit">submit</button>
        </form>
        <Link to="/home">
          <button type="button">Back Home</button>
        </Link>
      </div>
    );
  }
}

export default UpdateBook;
