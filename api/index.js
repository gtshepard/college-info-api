const router = require('express').Router();
const studentsRouter = require('./students');
const campusesRouter = require('./campuses');

//set up rotes for student and campus interface files
router.use("/students", studentsRouter);
router.use("/campuses", campusesRouter);

module.exports = router;
