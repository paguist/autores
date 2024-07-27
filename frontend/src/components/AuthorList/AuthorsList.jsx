import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './AuthorsList.css';

const AuthorsList = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/authors')
      .then(res => setAuthors(res.data))
      .catch(err => console.error(err));
  }, []);

  const deleteAuthor = id => {
    axios.delete(`http://localhost:8080/api/authors/${id}`)
      .then(() => setAuthors(authors.filter(author => author._id !== id)))
      .catch(err => console.error(err));
  };

  return (
    <div className="authors-list-container">
      <h1>Authors</h1>
      <Link to="/new" className="add-author-button">Add New Author</Link>
      <h2>We have quotes by:</h2>
      <ul>
        {authors.map(author => (
          <li key={author._id} className="author-item">
            <div className="author-info">
              <span className="author-name">{author.name}</span>
              <span className="author-quote">"{author.quote}"</span>
            </div>
            <div className="author-actions">
              <Link to={`/edit/${author._id}`} className="edit-button">Edit</Link>
              <button onClick={() => deleteAuthor(author._id)} className="delete-button">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorsList;

