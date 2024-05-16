const express = require('express');
const router = express.Router();


let books = [];

router.get('/', (req, res) => {
    res.json(books);
});

router.get('/:bookId', (req, res) => {
    const book = books.find(b => b.isbn === req.params.bookId);
    if (book) {
        res.json(book);
    } else {
        res.status(404).send('Book not found');
    }
});


router.post('/', (req, res) => {
    const newBook = req.body;
    books.push(newBook);
    res.status(201).json(newBook);
});

router.put('/:bookId', (req, res) => {
    const index = books.findIndex(b => b.isbn === req.params.bookId);
    if (index !== -1) {
        books[index] = req.body;
        res.json(books[index]);
    } else {
        res.status(404).send('Book not found');
    }
});

router.delete('/:bookId', (req, res) => {
    const index = books.findIndex(b => b.isbn === req.params.bookId);
    if (index !== -1) {
        books.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Book not found');
    }
});

module.exports = router;
