import { Axios } from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ListBook() {
  const [data, setData] = useState([]);
  const [cate, setCate] = useState([]);
  useEffect(() => {
    fetch("https://localhost:7292/api/Book/getAll ", {
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
  useEffect(() => {
    fetch("https://localhost:7292/api/Category/getListCategory", {
      method: "GET",
      headers: { "Access-Control-Allow-Origin": "*" },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        setCate(json);
      });
  }, []);
  function refreshPage() {
    window.location.reload(true);
  }
  function deleteBook(bookId) {
    
    if(window.confirm("Are you sure"))
    {
      fetch("https://localhost:7292/api/Book/delete?id="+bookId, {
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
          <th>Book ID</th>
          <th>Book Name</th>
          <th>Book Type</th>
          <th>Author</th>
          <th>Category ID</th>
         
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.bookid}>
            <td>{row.bookId}</td>
            <td>{row.bookName}</td>
            <td>{row.bookType}</td>
            <td>{row.author}</td>
            <td>{row.categoryId}</td>
            <td>
              <Link to={`/updatebook/${row.bookId}`}>
                <button type="button"> Update</button>
              </Link>
            </td>
            <td>
              <button onClick={() => deleteBook(row.bookId)}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
      <Link to="/home">
        <button type="button">Back Home</button>
      </Link>
      <Link to="/AddBook">
        <button type="button">Add New Book</button>
      </Link>
        <button type="button" onclick={refreshPage}>ReLoad</button>
     
    </table>
  );
}
