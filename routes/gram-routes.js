const gramController = require('../controllers/gram-controller');
const express = require('express');
const gramRoutes = express.Router();

gramRoutes.get('/add', (req, res) => {
  res.render('gcs-add');
});

gramRoutes.get('/:id', gramController.show);
gramRoutes.delete('/:id', gramController.delete);
gramRoutes.put('/:id', gramController.update);

gramRoutes.get('/', gramController.index);
gramRoutes.post('/', gramController.create);

gramRoutes.get('/:id/edit', gramController.edit);


module.exports = gramRoutes;
