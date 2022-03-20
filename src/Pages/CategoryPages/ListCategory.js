import { Axios } from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ListCategory() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch("https://localhost:7292/api/Category/getListCategory ", {
      method: "GET",
      headers: { "Access-Control-Allow-Origin": "*" },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        setData(json);
      });
  }, []);
  function deleteBook(categoryId) {
    
    if(window.confirm("Are you sure"))
    {
      fetch("https://localhost:7292/api/Category/deleteCategory?id="+categoryId, {
        method:"DELETE",
        headers: {'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      }
      })
    }
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Category ID</th>
          <th>Category Name</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.categoryId}>
            <td>{row.categoryId}</td>
            <td>{row.categoryName}</td>
            <td>
              <Link to={`/UpdateCategory/${row.categoryId}`}>
                  <button type="button">Update</button>
              </Link>
            </td>
            <td>
              <button onClick={() => deleteBook(row.categoryId)}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
      <Link to="/home">
        <button type="button">Back Home</button>
      </Link>
      <Link to="/AddCategory">
        <button type="button">Add New Category</button>
      </Link>
    </table>
  );
}
