const Gram = require('../models/grams');

const gramController = {};

gramController.index = (req, res) => {
  Gram.findAll()
  .then(grams => {
    res.json({
      message: 'ok',
      data: grams,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

gramController.show = (req, res) => {
  Gram.findById(req.params.id)
  .then(gram => {
    res.json({
      message: 'ok',
      data: gram,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

gramController.create = (req, res) => {
  Gram.create({
    photo: req.body.photo,
    location: req.body.location,
    status: req.body.status,
    comments: req.body.comments,
    type: req.body.type,
  })
  .then(gram => {
    res.json({
      message: 'Gram added successfully!',
      data: gram,
    });
  }).catch(err => {
    res.status(500).json(err);
  });
};

gramController.update = (req, res) => {
  Gram.update({
    photo: req.body.photo,
    location: req.body.location,
    status: req.body.status,
    comments: req.body.comments,
    type: req.body.type,
  }, req.params.id).then(gram => {
    res.json({
      message: 'Gram updated successfully!',
      data: gram,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

gramController.delete = (req, res) => {
  Gram.delete(req.params.id)
  .then(() => {
    res.json({
      message: 'Gram deleted successfully!',
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

module.exports = gramController;
