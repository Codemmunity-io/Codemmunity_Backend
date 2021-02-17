const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const db = {};

let sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);

// read all of the files from the directory - filter out files that don't have .js extension, and aren't the same as the basename
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      // checks if file has a name && if file is equal to basename && if file is a js file
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  // loop through all of the files that passed the filter
  .forEach((file) => {
    // not sure whats going on here - someone explain plz
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

// loop through all of the models in the DB and associate them?? explain plz
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
