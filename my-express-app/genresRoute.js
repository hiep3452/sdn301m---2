const express = require('express');
const router = express.Router();

let genres = [];

router.get('/', (req, res) => {
    res.json(genres);
});

router.get('/:genreId', (req, res) => {
    const genre = genres.find(g => g.id === parseInt(req.params.genreId));
    if (genre) {
        res.json(genre);
    } else {
        res.status(404).send('Genre not found');
    }
});

router.post('/', (req, res) => {
    const newGenre = req.body;
    genres.push(newGenre);
    res.status(201).json(newGenre);
});

router.put('/:genreId', (req, res) => {
    const index = genres.findIndex(g => g.id === parseInt(req.params.genreId));
    if (index !== -1) {
        genres[index] = req.body;
        res.json(genres[index]);
    } else {
        res.status(404).send('Genre not found');
    }
});

router.delete('/:genreId', (req, res) => {
    const index = genres.findIndex(g => g.id === parseInt(req.params.genreId));
    if (index !== -1) {
        genres.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Genre not found');
    }
});

module.exports = router;
