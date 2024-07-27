import React from 'react';
import axios from 'axios';
import AuthorForm from './AuthorForm';
import { useNavigate } from 'react-router-dom';

const NewAuthor = () => {
  const navigate = useNavigate();

  const createAuthor = author => {
    axios.post('http://localhost:8080/api/authors', author)
      .then(() => navigate('/'))
      .catch(err => console.error(err));
  };

  return (
    <div className="form-container">
      <h2>Add New Author</h2>
      <AuthorForm onSubmitProp={createAuthor} initialName="" initialQuote="" />
    </div>
  );
};

export default NewAuthor;

