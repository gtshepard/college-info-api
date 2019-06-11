require('./.env');
const Sequelize = require('sequelize');
const database = new Sequelize('postgres://garrison:Gt$092894@localhost/campus_management');
const CampusModel = require('./campus_model');
const StudentModel = require('./student_model');

//init data models
const Campus = CampusModel(Sequelize, database);
const Student = StudentModel(Sequelize, database);

//establish entity realtionships
Student.belongsTo(Campus);
Campus.hasMany(Student);

//sync  db
database.sync({force: true})
        .then(() => {
           console.log("db and tables created")
});

module.exports = {
  Campus,
  Student
}
