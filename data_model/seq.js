require('dotenv').config();
const Sequelize = require('sequelize');
const database = new Sequelize('postgres://garrison:Gt$092894@localhost/campus_management');
const CampusModel = require('./campus_model');
const StudentModel = require('./student_model');
console.log(process.env.DB_USR_PASSWORD);
//init data models
const Student = StudentModel(Sequelize, database);
const Campus = CampusModel(Sequelize, database);
//establish entity realtionships
Student.belongsTo(Campus);
Campus.hasMany(Student);

//sync  db
database.sync()
        .then(() => {
           console.log("db and tables created")
});

module.exports = {
  Campus,
  Student
}
