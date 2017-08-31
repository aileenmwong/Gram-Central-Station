const db = require('../db/config');

const Gram = {};

Gram.findAll = () => {
  return db.query(`
    SELECT grams.id, photo, location, status, comments, type
    FROM grams INNER JOIN phototypes
    ON grams.type = phototypes.id
    `);
};

Gram.findById = (id) => {
  return db.oneOrNone(`
    SELECT grams.id, photo, location, status, comments, type
    FROM grams INNER JOIN phototypes
    ON grams.type = phototypes.id
    WHERE grams.id = $1
    `, [id]);
};

Gram.create = (grams) => {
  grams.id = Number.parseInt(grams.id, 10);
  return db.one(`
    INSERT INTO grams
    (grams.photo, grams.location, grams.status, grams.comments, grams.type)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
    `, grams
    [grams.photo, grams.location, grams.status, grams.comments, grams.type]
    );
};

Gram.update = (grams, id) => {
  return db.one(`
    UPDATE grams SET
    photo = $1,
    location = $2,
    status = $3,
    comments = $4,
    type = $5
    WHERE grams.id = $6
    RETURNING *
    `, [grams.photo, grams.location, grams.status, grams.comments, grams.type, grams.id]
    );
};

Gram.delete = (id) => {
  return db.none(`
    DELETE FROM grams
    WHERE grams.id = $1
    `, [id]);
}


module.exports = Gram;
