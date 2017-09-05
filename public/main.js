$(document).ready(function() {
console.log('main.js is connected!');

// set variables so they can change dynamically as information comes in from the api
let location;
let address;
let phone;
let website;
counter = 0;


  var callApi = function(event) {
    event.preventDefault();
    // console.log('inside callApi')
    // the callApi function makes the ajax call to get the data
    let food = $('#foodSearch').val();
    let locationSearch = $('#locationSearch').val();
    let url = `https://api.foursquare.com/v2/venues/search?near=${locationSearch}+&query=${food}+&limit=10&client_id=RL55VEBRRIQBNSGEA0EJ3YCZFFQRXNN3FEI2V1MWN4SZY2CS&client_secret=LSUPFZ5NNJ402S0IC55B5OVIIEMMKZ24WKY1B1ZVIIGPPZLS&v=20170831`
    $.getJSON(url)
      .done(function(data) {
        console.log('the data stuff ->>', data);
        // debugger
        for (let i=0; i < data.response.venues.length; i++) {

        location = data.response.venues[i].name;
        address = data.response.venues[i].location.formattedAddress;
        phone = data.response.venues[i].contact.formattedPhone;
        website = data.response.venues[i].url;

        manipulateDom(location,address,phone,website);
      }
      })
      .fail(function(data) {
        console.log('failed getting locations');
      })
      counter ++;
  }

  // change the inner html of lis with appropriate data
  var manipulateDom = function(location, address, phone, website, type) {
    console.log('manipulating the dom',location,address[0],phone,website);

    let $container = $('<ul>').attr('class', 'resultCont');

    let locationItem = $('<li>').attr('class', 'searchLocation').html(location);
    locationItem.appendTo($container);

    let addressItem = $('<li>').attr('class', 'searchAddress').html(address);
    addressItem.appendTo($container);

    let phoneItem = $('<li>').attr('class', 'searchPhone').html(phone);
    phoneItem.appendTo($container);

    let websiteItem = $('<li>').attr('class', 'searchWebsite').html(website);
    let websiteButton = $('<button>').attr('class', 'websiteButton').html('Go To Website');
    $container.append(websiteItem);
    $container.append(websiteButton);
    websiteButton.wrap('<a href="'+ website +'"></a>')

    $('#searchResults').append($container)

  }

  let submitButton = document.querySelector('#searchAPIbutton');
  //add event listener to the submit button and call Api function
  submitButton.addEventListener('click', callApi);





});
