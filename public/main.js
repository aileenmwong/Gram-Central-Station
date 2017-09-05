$(document).ready(function() {
console.log('main.js is connected!');

// set variables so they can change dynamically as information comes in from the api
let location;
let address;
let phone;
let website;


  var callApi = function(event) {
    event.preventDefault();
    // console.log('inside callApi')
    // the callApi function makes the ajax call to get the data
    let food = $('#foodSearch').val();
    let locationSearch = $('#locationSearch').val();
    // creating the data package
    let data = {
      "food": food,
      "locationSearch": locationSearch
    }
    let url2 = `/apiroute`

    //grab data from api router
      $.ajax({
        type: "POST",
        url: url2,
        data: data,
        dataType: "JSON"
      })
      .done(function(data) {
        console.log('the data stuff ->>', data);
        //loop through data and store values into variables
        for (let i=0; i < data.response.venues.length; i++) {
          location = data.response.venues[i].name;
          address = data.response.venues[i].location.formattedAddress;
          phone = data.response.venues[i].contact.formattedPhone;
          website = data.response.venues[i].url;
          //manipulate the dom to render information dynamically
          manipulateDom(location,address,phone,website);
        }
      })
      .fail(function(data) {
        console.log('failed getting locations');
      })
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

  let submitButton = document.querySelector('#searchAPIbutton');
  //add event listener to the submit button and call Api function
  submitButton.addEventListener('click', callApi);





});
