import React, { Component, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class AddCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
        categoryId: "",
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
      .put("https://localhost:7292/api/Category/updateCategory", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { categoryName, categoryId } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <div>
            <label>Category Id: </label>
            <input
              type="text"
              name="categoryId"
              value={categoryId}
              placeholder="Enter Category Name"
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <label>Category Name: </label>
            <input
              type="text"
              name="categoryName"
              value={categoryName}
              placeholder="Enter Category Name"
              onChange={this.handleChange}
            ></input>
          </div>
          
          <button type="submit">submit</button>
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
