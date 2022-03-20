import React, { Component, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class AddCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: ""
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://localhost:7292/api/Category/createCategory", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { categoryName} = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Book Name: </label>
            <input
              type="text"
              name="categoryName"
              value={categoryName}
              placeholder="Enter Category Name"
              onChange={this.handleChange}
            ></input>
          </div>
          <button type="submit">Submit</button>
        </form>
        <Link to="/home">
          <button type="button">Back Home</button>
        </Link>
        <Link to="/ListCategory">
          <button type="button">Back To List Category</button>
        </Link>
      </div>
    );
  }
}

export default AddCategory;
