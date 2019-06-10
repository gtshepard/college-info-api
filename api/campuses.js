const router = require('express').Router();

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
  res.status(201).json(all_campuses);
});

router.get('/:id', (req, res, next) => {
  for(let i = 0; i < all_campuses.campuses.length; i++){
    if (all_campuses.campuses[i].id === req.params.id){
        res.status(201).json(all_campuses.campuses[i]);
    } else {
        res.status(404);
    }
  }
});

module.exports = router
