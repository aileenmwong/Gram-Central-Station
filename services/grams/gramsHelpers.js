//require isomorphic-fetch
require('isomorphic-fetch');
//require dotenv to hide keys
require('dotenv').config();
//declare variables as keys
const CLIENT_ID = process.env.SUPER_SECRET_CLIENT_ID;
const CLIENT_SECRET = process.env.SUPER_SECRET_CLIENT_SECRET;

//declare variables with no values so data can be stored dynamically in the call
let location;
let address;
let phone;
let website;
//set counter at 0
counter = 0;

//declare a function of getSearchResults with req, res, and next as parameters
function getSearchResults(req, res, next) {
  //declare variables for search terms in the API key
  let food = $('#foodSearch').val();
  let locationSearch = $('#locationSearch').val();
  //fetch the api
  fetch('https://api.foursquare.com/v2/venues/search?near=${locationSearch}+&query=${food}+&limit=10&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20170831')
  //use then promise to fetch response
  .then((fetchRes) => {
    //return the data
    return fetchRes.json();
    // use
  }).then((jsonFetchRes) => {
    // console.log(jsonFetchRes);
    // console.log(jsonFetchRes.contents.grams);

    // declare the submit button as element on a page
    let submitButton = $('#searchAPIbutton');
    //add event listener to the submit button and call Api function
    submitButton.addEventListener('click', getSearchResults);
    // loop through the data that has been fetched and declare it as the variables above
    for (let i=0; i < jsonFetchres.data.response.venues.length; i++) {
    res.locals.location = jsonFetchres.data.response.venues[i].name;
    res.locals.address = jsonFetchres.data.response.venues[i].location.formattedAddress;
    res.locals.phone = jsonFetchres.data.response.venues[i].contact.formattedPhone;
    res.locals.website = jsonFetchres.data.response.venues[i].url;
    //use manipulateDom function to render the data to the page
    manipulateDom(res.locals.location,res.locals.address,res.locals.phone,res,locals.website);
    //call next
    next();
    };
    //increase the counter
    counter ++;
    //if there is an error, render something to the page so user will know an error has occurred
  }).catch((err) => {
    console.log(err);
    res.locals.location = 'Coming Soon!';
    res.locals.address = null;
    res.locals.phone = null;
    res.locals.website = null;
    next();
  });
}

  // change the inner html of lis with appropriate data
  var manipulateDom = function(location, address, phone, website, type) {
    console.log('manipulating the dom',location,address[0],phone,website);
    //create a container to append the lis
    let $container = $('<ul>').attr('class', 'resultCont');

    let locationItem = $('<li>').attr('class', 'searchLocation').html(location);
    //append the location to the container
    locationItem.appendTo($container);

    let addressItem = $('<li>').attr('class', 'searchAddress').html(address);
    //append the address to the container
    addressItem.appendTo($container);

    let phoneItem = $('<li>').attr('class', 'searchPhone').html(phone);
    //append the phone to the container
    phoneItem.appendTo($container);

    let websiteItem = $('<li>').attr('class', 'searchWebsite').html(website);
    //create a button that can link the user to the website
    let websiteButton = $('<button>').attr('class', 'websiteButton').html('Go To Website');
    //append the website to the container
    $container.append(websiteItem);
    //append the button to the container
    $container.append(websiteButton);
    //wrap the button in the link
    websiteButton.wrap('<a href="'+ website +'"></a>')

    //append the container to the search results
    $('#searchResults').append($container)

  }

//export the helper file
module.exports = {
  getSearchResults: getSearchResults,
}
