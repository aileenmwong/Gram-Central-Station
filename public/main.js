
$(document).ready(function() {
console.log('main.js is connected!');

var location;
var address;
var phone;
var website;
var type;



  var callApi = function(event) {
    event.preventDefault();
    // console.log('inside callApi')
    // the callApi function makes the ajax call to get the data
    let food = $('#foodSearch').val();
    let location = $('#locationSearch').val();
    let url = `https://api.foursquare.com/v2/venues/search?near=${location}+&query=${food}+&limit=10&client_id=RL55VEBRRIQBNSGEA0EJ3YCZFFQRXNN3FEI2V1MWN4SZY2CS&client_secret=LSUPFZ5NNJ402S0IC55B5OVIIEMMKZ24WKY1B1ZVIIGPPZLS&v=20170831`
    $.getJSON(url)
      .done(function(data) {
        console.log(data)
        for (let i=0; i < data.response.venues.length; i++) {
        // let locations = data.response.venues.map (e => e.name)
        // let websites = data.response.venues.map (e => e.url)
        // let types = data.response.venues.map (e => e.categories)
        location = data.response.venues[i].name;
        address = data.response.venues[i].location.formattedAddress;
        phone = data.response.venues[i].contact.formattedPhone;
        website = data.response.venues[i].url;
        type = data.response.venues[i].categories[i].name;
        // console.log(locations, websites, types);
        manipulateDom(location,address,phone,website,type);

      }
      })
      .fail(function(data) {
        console.log('failed getting locations');
      })
  }

  // change the inner html of divs with appropriate data
  var manipulateDom = function(location, address, phone, website, type){
    // for (let i=0; i < data.response.venues.length; i++) {
    let searchLocationDiv = $('<div>').attr('class', 'searchLocation');
    let locationName = $('.searchLocation').html(location);
    searchLocationDiv.append(locationName);
    searchResults.append(searchLocationDiv);

    let searchAddressDiv = $('<div>').attr('class', 'searchAddress');
    let addressName = $('.searchAddress').html(address);
    searchAddressDiv.append(addressName);
    searchResults.append(searchAddressDiv);

    let searchPhoneDiv = $('<div>').attr('class', 'searchPhone');
    let phoneName = $('.searchPhone').html(phone);
    searchPhoneDiv.append(phoneName);
    searchResults.append(searchPhoneDiv);

    let searchWebsiteDiv = $('<div>').attr('class', 'searchWebsite');
    let websiteName = $('.searchWebsite').html(website);
    searchWebsiteDiv.append(websiteName);
    searchResults.append(searchWebsiteDiv);

    let searchTypeDiv = $('<div>').attr('class', 'searchType')
    let searchName = $('.searchType').html(type);
    searchTypeDiv.append(searchName);
    searchResults.append(searchTypeDiv);
    // }
    // locations.map(e => $('#searchLocation').append(e))
  }

  let submitButton = document.querySelector('#searchAPIbutton');
  //add event listener to the submit button and call Api function
  submitButton.addEventListener('click', callApi);

});
