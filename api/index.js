const router = require('express').Router();
const studentsRouter = require('./students');
const campusesRouter = require('./campuses');

//set up rotes for student and campus interface files
router.use("/students", studentsRouter);
router.use("/campuses", campusesRouter);

module.exports = router;


/**
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

app.get('/campuses', (req, res) => {
     res.status(201).json(all_campuses);
});

app.get('/campus/:id', (req, res) => {
        for(let i = 0; i < all_campuses.campuses.length; i++){
          if (all_campuses.campuses[i].id === req.params.id){
              res.status(201).json(all_campuses.campuses[i]);
          } else {
              res.status(404);
          }
        }
});






app.listen(3000, ()=> {
  console.log("listening on port 3000");
})
**/
