const Sequelize = require('sequelize');
const Database = new Sequelize('postgres://garrison:GT$092894@localhost/campus_management');
const CampusModel = require('./campus_model');
const StudentModel = require('./student_model');


const Campus = CampusModel(Sequelize, Database);
const Student = StudentModel(Sequelize, Database);
