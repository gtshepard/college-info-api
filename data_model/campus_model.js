module.exports = (seq, db) => {
  seq.define('campus', {
      id: {
        type: dataType.INTEGER,
        primaryKey: true,
        autoincrement: true
      },
      name: dataType.STRING,
      address: dataType.STRING,
      image_url: dataType.STRING,
      description: dataType.STRING
  })
}
