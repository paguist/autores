import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NewAuthor from './components/AddAuthor';
import EditAuthor from './components/EditAuthor';
import AuthorsList from './components/AuthorList/AuthorsList';
import './App.css';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewAuthor />} />
        <Route path="/edit/:id" element={<EditAuthor />} />
        <Route path="/authors" element={<AuthorsList />} />
      </Routes>
    </div>
  );
};

export default App;






