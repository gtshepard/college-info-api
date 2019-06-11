module.exports = (dataType, db) => {

return db.define('student', {
  
      firstName: dataType.STRING,
      lastName: dataType.STRING,
      email: dataType.STRING,
      imageUrl: dataType.STRING,
      gpa: dataType.STRING
  });
}
