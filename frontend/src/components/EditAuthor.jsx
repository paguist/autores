import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AuthorForm from './AuthorForm';
import { useParams, useNavigate } from 'react-router-dom';

const EditAuthor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/authors/${id}`)
      .then(res => setAuthor(res.data))
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div className="form-container">
      <h2>Edit Author</h2>
      {author && <AuthorForm onSubmitProp={() => {}} initialName={author.name} initialQuote={author.quote} />}
    </div>
  );
};

export default EditAuthor;

