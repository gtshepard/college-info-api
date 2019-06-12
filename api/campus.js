const router = require('express').Router();
const {Campus, Student} = require('../data_model/seq');

  router.get('/', (req, res) => {
    Campus.findAll().then(campuses => res.json(campuses))
  });

  router.get('/:id', (req, res, next) => {
     Campus.findByPk(req.params.id).then((result) => res.status(201).json(result));
  });

  //TODO: POST (add campus)
  router.post('/', (req, res) =>{
    Campus.create(req.body).then((result) => res.status(201).json(result));
  });

  //TODO: PUT (update campus)
  router.put('/:id', (req, res) => {
      Campus.findByPk(req.params.id).then((campus) => campus.update(req.body)).then((updatedCampus) => res.status(201).json(updatedCampus))
  });

  //TODO: DELETE (remove campus)
  router.delete('/:id', (req, res) => {
    Campus.destroy({
        where: { id: req.params.id }
    }).then(campus => res.status(201).json(campus));
  });


module.exports = router
//localhost:3000/api/v1/campuses/campus?id=0&name=nyu&address=23 wallabee way&imageUrl=http&description=GOOD
//TODO:
