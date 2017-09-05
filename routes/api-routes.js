//require express
const apiRouter = require('express').Router();

//require them middleware I created to grab data from api
const gramsHelpers = require('../services/grams/gramsHelpers');

//create a route to post the data
apiRouter.post('/', gramsHelpers.getSearchResults)

//export the router
module.exports = apiRouter;
