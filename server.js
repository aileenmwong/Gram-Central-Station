// require dotenv to hide keys
require('dotenv').config();
// require express
const express = require('express');
// declare app as express
const app = express();

//MIDDLEWARE
//require bodyParser
const bodyParser = require('body-parser');
//require path
const path = require('path');
//require Method OVerride
const methodOverride = require('method-override');

//use middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

//render index page
app.get('/', function(req, res){
  res.render('gcs-index')
});

//render 404 page for gramfeed since gramfeed doesnt work
app.get('/gramfeed', (req, res) => {
  res.render('gcs-404')
});

// app.get('/search', function(req, res){
//   res.render('gcs-api-search')
// });

// const clientID = process.env.SUPER_SECRET_CLIENT_ID;
// const clientSecret = process.env.SUPER_SECRET_CLIENT_SECRET;
// app.get('/search', function(req, res) {
//   request("https://api.foursquare.com/v2/venues/search?near="+near+"&query="+query+"+&limit=10&client_id={clientID}&client_secret={clientSecret}&v=20170831")
//   .then((response) => {
//     response = JSON.parse(response);
//     res.render ('gcs-api-search', {
//         location: data.response.venues.name,
//         address: data.response.venues.location.formattedAddress,
//         phone: data.response.venues.contact.formattedPhone,
//         website: data.response.venues.url,
//     })
//   })
//   .catch(err => res.json(err));
// });

//require the router
const gramRoutes = require('./routes/gram-routes');
app.use('/grams', gramRoutes);

//set the views so ejs can be rendered
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// require public folder so anything placed in public folder can be used
app.use(express.static('public'));
app.use(express.static(__dirname + "/public"));


//assign port
const port = process.env.PORT || 3000;
app.listen(port,() => {
  console.log(`listening on port ${port}`);
})


