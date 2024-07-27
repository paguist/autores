import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'; 


const AuthorForm = ({ onSubmitProp, initialName = "", initialQuote = "" }) => {
  const [formValues, setFormValues] = useState({
    name: initialName,
    quote: initialQuote
  });
  const { _id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (_id) {
      axios.get(`http://localhost:8080/api/authors/${_id}`)
        .then(response => setFormValues(response.data))
        .catch(error => console.log(error));
    }
  }, [_id]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const newAuthor = {
      name: formValues.name,
      quote: formValues.quote
    };

    if (_id) {
      try {
        await axios.put(`http://localhost:8080/api/authors/${_id}`, newAuthor);
        navigate('/authors'); 
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await axios.post("http://localhost:8080/api/authors", newAuthor);
        navigate('/authors'); 
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <h2>{_id ? "Edit Author" : "Add Author"}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="quote">Quote:</label>
          <input
            type="text"
            id="quote"
            name="quote"
            value={formValues.quote}
            onChange={handleChange}
          />
        </div>
        <button type="submit">{_id ? "Submit" : "Add Author"}</button>
        {_id && <button type="button" onClick={() => navigate('/authors')}>Cancel</button>}
      </form>
    </>
  );
};

export default AuthorForm;
