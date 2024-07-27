const express = require('express');
const AuthorController = require('../controller/AuthorController');

const router = express.Router();

router.get('/', AuthorController.getAllAuthors);
router.post('/', AuthorController.createAuthor);
router.get('/:id', AuthorController.getOneAuthor);
router.put('/:id', AuthorController.updateAuthor);
router.delete('/:id', AuthorController.deleteAuthor);

module.exports = router;

