const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(201).json("ALL CAMPUSES");
});

router.get('/:id', (req, res, next) => {
    res.status(201).json("Hunter");
});

module.exports = router
