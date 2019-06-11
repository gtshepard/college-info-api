module.exports = (dataType, db) => {

return db.define('student', {
      id: {
        type: dataType.INTEGER,
        primaryKey: true,
        autoincrement: true
      },
      firstName: dataType.STRING,
      lastName: dataType.STRING,
      email: dataType.STRING,
      imageUrl: dataType.STRING,
      gpa: dataType.STRING
  });
}
