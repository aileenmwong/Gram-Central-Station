//require the model
const Gram = require('../models/grams');

//create an empty object to store the function being used
const gramController = {};

//this is the controller function that renders all of the data from the database
gramController.index = (req, res) => {
  Gram.findAll()
  .then(grams => {
    res.render('./gcs-myfeed', {
      data: grams,
    })
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

//this is the controller function that renders the data from a single item in the database
gramController.show = (req, res) => {
  Gram.findById(req.params.id)
  .then(data => {
    res.render('./gcs-single', {
      grams: data,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

//this is the controller function that renders the data when creating an item in the database
gramController.create = (req, res) => {
  Gram.create({
    photo: req.body.photo,
    location: req.body.location,
    status: req.body.status,
    comments: req.body.comments,
    type: req.body.type,
  })
  .then (grams => {
    res.redirect('/grams');
    })
  .catch (err => {
    console.log(err);
    res.status(500).json(err);
  });
};

//this is the controller function that renders the data when editing an item in the database
gramController.edit = (req, res) => {
  Gram.findById(req.params.id)
  .then(grams => {
    res.render('./gcs-edit', {
      data: grams,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

//this is the controller function that renders the data when updating an item in the database
gramController.update = (req, res) => {
  Gram.update({
    photo: req.body.photo,
    location: req.body.location,
    status: req.body.status,
    comments: req.body.comments,
    type: req.body.type,
  }, req.params.id).then(gram => {
    res.redirect('/grams');
    // `/grams/${req.params.id}`
    })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

//this is the controller function that renders the data when searching for an item in the API
gramController.search = (req, res) => {
  Gram.search
    .then(grams => {
    res.render('./gcs-api-search', {
    location: res.locals.location,
    address: res.locals.address,
    phone: res.locals.phone,
    website: res.locals.website,
  })
  .catch(err => {
    res.status(500).json(err);
  });
  });
}

//this is the controller function that renders the data when deleting an item from the database
gramController.delete = (req, res) => {
  Gram.delete(req.params.id)
  .then(() => {
    res.redirect('/grams');
    })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

//export the controller
module.exports = gramController;
