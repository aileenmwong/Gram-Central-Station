
//require the controller
const gramController = require('../controllers/gram-controller');
//require express
const express = require('express');
//declare the express router
const gramRoutes = express.Router();
//require the JS for the helper functions
const gramsHelpers = require('../services/grams/gramsHelpers');

//render the add page by displaying gcs-add ejs
gramRoutes.get('/add', (req, res) => {
  res.render('gcs-add');
});

//get the search page by using gramController.search from the controller
gramRoutes.get('/search', gramsHelpers.getSearchResults, gramController.search);

//get the single page by using gramController.show from the controller
gramRoutes.get('/:id', gramController.show);
//get the delete function by using gramController.delete from the controller
gramRoutes.delete('/:id', gramController.delete);
//get the update function by using gramController.update from the controller
gramRoutes.put('/:id', gramController.update);

//get the index page by using gramController.index from the controller
gramRoutes.get('/', gramController.index);
//get the add page by using gramController.create from the controller
gramRoutes.post('/', gramController.create);

//get the edit page by using gramController.edit from the controller
gramRoutes.get('/:id/edit', gramController.edit);

//export the router
module.exports = gramRoutes;
