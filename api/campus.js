const router = require('express').Router();
const {Campus, Student} = require('../data_model/seq');

  let all_campuses = {
    campuses:[
    {
       id: "0",
       name: "Hunter College",
       address: "695 park ave"
     },
     {
       id: "1",
       name: "Baruch College",
       address: "23rd st"
      }
    ]
  }

  router.get('/', (req, res) => {

  });

  router.get('/:id', (req, res, next) => {
  /**  for(let i = 0; i < all_campuses.campuses.length; i++){
      if (all_campuses.campuses[i].id === req.params.id){
          res.status(201).json(all_campuses.campuses[i]);
        } else {
          res.status(404);
      }
    }**/
     Campus.findById(req.params.id).then((result) => res.json(result));


  });

//TODO: POST (add campus)
router.post('/campus', (req, res) =>{
    Campus.create(req.query).then((result) => res.status(201).json(result));
//  res.status(201).json(req.query);
  //  console.log(req.query);

})
//TODO: DELETE (remove campus)
//TODO: PUT (update campus)
module.exports = router
//localhost:3000/api/v1/campuses/campus?id=0&name=nyu&address=23 wallabee way&imageUrl=http&description=GOOD
