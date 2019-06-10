const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.status(201).json("ALL STUDENTS");

});
router.get('/:id', (req, res, next) => {
    res.status(201).json("Jimmy");
});

module.exports = router
