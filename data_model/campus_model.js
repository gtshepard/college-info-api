module.exports = (dataType, db) => {

  return  db.define('campus', {
      id: {
        type: dataType.INTEGER,
        primaryKey: true,
        autoincrement: true
      },
      name: dataType.STRING,
      address: dataType.STRING,
      imageUrl: dataType.STRING,
      description: dataType.STRING
  });
}
