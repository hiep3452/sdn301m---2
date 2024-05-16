const express = require('express');
const router = express.Router();

let authors = [];

router.get('/', (req, res) => {
    res.json(authors);
});

router.get('/:authorId', (req, res) => {
    const author = authors.find(a => a.id === parseInt(req.params.authorId));
    if (author) {
        res.json(author);
    } else {
        res.status(404).send('Author not found');
    }
});

router.post('/', (req, res) => {
    const newAuthor = req.body;
    authors.push(newAuthor);
    res.status(201).json(newAuthor);
});

router.put('/:authorId', (req, res) => {
    const index = authors.findIndex(a => a.id === parseInt(req.params.authorId));
    if (index !== -1) {
        authors[index] = req.body;
        res.json(authors[index]);
    } else {
        res.status(404).send('Author not found');
    }
});

router.delete('/:authorId', (req, res) => {
    const index = authors.findIndex(a => a.id === parseInt(req.params.authorId));
    if (index !== -1) {
        authors.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Author not found');
    }
});

module.exports = router;
