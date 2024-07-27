import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './EditAuthor/EditAuthor.css'; 

const EditAuthorForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchAuthor = async () => {
      const response = await axios.get(`http://localhost:8080/api/authors/${id}`);
      setName(response.data.name);
    };
    fetchAuthor();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/authors/${id}`, { name });
      navigate('/authors');
    } catch (error) {
      console.error('Error updating author:', error);
    }
  };

  const handleCancel = () => {
    navigate('/authors');
  };

  return (
    <div className="editAuthorForm">
      <h2>Edit Author</h2>
      <form className="edit-author" onSubmit={handleSubmit}>
        <label htmlFor="author-name">Name</label>
        <input
          id="author-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="form-button">
          <button type="submit" className="submit-button">Submit</button>
          <button type="button" className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditAuthorForm;
