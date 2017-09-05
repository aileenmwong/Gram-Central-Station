//require the configuration
const db = require('../db/config');

//create an empty object to push the function that the model is using into
const Gram = {};

//this is the function selects all of the data from the database
Gram.findAll = () => {
  return db.query(`
    SELECT grams.id, photo, location, status, comments, type
    FROM grams INNER JOIN phototypes
    ON grams.type = phototypes.id
    `);
};

//this is the function selects a single item from the database
Gram.findById = (id) => {
  console.log('helllo',id);
  return db.oneOrNone(`
    SELECT grams.id, photo, location, status, comments, type
    FROM grams INNER JOIN phototypes
    ON grams.type = phototypes.id
    WHERE grams.id = $1
    `, [id]);
};

//this is the function inserts a single item into the database
Gram.create = grams => {
  grams.type = Number.parseInt(grams.type, 10)
  console.log(grams.type);
  return db.one(
    `
    INSERT INTO grams
    (photo, location, status, comments, type)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
    `,
    [grams.photo, grams.location, grams.status, grams.comments, grams.type]
    );
};

//this is the function updates a single item in the database
Gram.update = (grams, id) => {
  grams.type = Number.parseInt(grams.type, 10)
  console.log(grams, id);
  return db.one(
    `
    UPDATE grams SET
    photo = $1,
    location = $2,
    status = $3,
    comments = $4,
    type = $5
    WHERE id = $6
    RETURNING *
    `, [grams.photo, grams.location, grams.status, grams.comments, grams.type, id]
    );
};

//this is the function deletes a single item in the database
Gram.delete = (id) => {
  return db.none(`
    DELETE FROM grams
    WHERE id = $1
    `, [id]);
}

//export the model
module.exports = Gram;
