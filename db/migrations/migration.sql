

CREATE TABLE IF NOT EXISTS phototypes (
  id BIGSERIAL PRIMARY KEY,
  imgtype VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS grams (
  id BIGSERIAL PRIMARY KEY,
  photo VARCHAR(255),
  location VARCHAR(255),
  status VARCHAR(255),
  comments VARCHAR(255),
  type INTEGER REFERENCES phototypes(id)
);




