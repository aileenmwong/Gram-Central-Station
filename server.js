const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// app.get('/', (req, res) => {
//   res.send('<h1>Gram Central Station</h1>');
// });

app.get('/', function(req, res){
  res.render('gcs-index')
});

const gramRoutes = require('./routes/gram-routes');
app.use('/grams', gramRoutes);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static(__dirname + "/public"));

//assign port
const port = 3000;
app.listen(port,() => {
  console.log(`listening on port ${port}`);
})
