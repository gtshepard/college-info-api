const router = require('express').Router();
const studentRouter = require('./student');
const campusRouter = require('./campus');
const {Campus, Student} = require('../data_model/seq');

//set up routes for student and campus interface files
router.use("/students", studentRouter);
router.use("/campuses", campusRouter);

module.exports = router;
