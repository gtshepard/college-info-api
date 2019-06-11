module.exports = (dataType, db) => {

  return  db.define('campus', {
      name: dataType.STRING,
      address: dataType.STRING,
      imageUrl: dataType.STRING,
      description: dataType.STRING
  });
}
