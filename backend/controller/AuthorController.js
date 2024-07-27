const Author = require('../model/AuthorModel');

const getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.find();
        res.status(200).json(authors);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getOneAuthor = async (req, res) => {
    try {
        const findAuthor = await Author.findById(req.params.id);
        if (!findAuthor) {
            return res.status(404).json({ message: 'Author not found.' });
        }
        res.status(200).json(findAuthor);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const createAuthor = async (req, res) => {
    try {
        const newAuthor = await Author.create(req.body);
        res.status(201).json(newAuthor);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const updateAuthor = async (req, res) => {
    try {
        const updatedAuthor = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedAuthor) {
            return res.status(404).json({ message: 'Author not found.' });
        }
        res.status(200).json(updatedAuthor);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteAuthor = async (req, res) => {
    try {
        const result = await Author.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).json({ message: 'Author not found.' });
        }
        res.status(204).end();
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = {
    getAllAuthors,
    getOneAuthor,
    createAuthor,
    updateAuthor,
    deleteAuthor
};

