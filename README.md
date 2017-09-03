![Gram Central Station My Feed](/readme-assets/GCS-feed-page.png "Gram Central Station My Feed")

# Gram Central Station ###

Gram Central Station is the place where Instagram lovers can save their future gram-ventures. In addition to saving photos for reference, users can also add comments and add a status to indicate whether or not they've done it. In addition, they can also use the search feature to look for spots nearby to potentially find a new hidden gem.

As a heavy social media user, my friends and I are often sending each other photos of things or places we want to go to. The problem is that when we actually have time to go to them, we forget and always go back to our old haunts. We've started to share cloud based docs that we add to every time we find something new, but ultimately the doc gets forgotten and it's too late because the exhibit has closed or the store is sold out -- and that's where Gram Central Station comes in!

[Go to Gram Central Station](#)

## Technologies Used ###

- HTML5
- CSS3
- Vanilla Javascript
- jQuery
- node.js
- express
- EJS
- Foursquare API

## About the Build ###

**HTML5/EJS/CSS** - I built all of my pages first in HTML before converting them to EJS, as EJS does not play friendly with shortcuts in sublime. It's also really difficult in EJS to see where tags start and end since it's not color coded. I was able to have time to play with CSS animations for this project and make my page more responsive.

**Node/Express** - I feel comfortable with Node and Express, and I like the structure of it. It makes a lot of sense to me how one thing affects another, so I was glad that we are using a language that can only go in so many directions and ultimately each thing is connected to the next. 

**Javascript** - Javascript is still a weaker language for me, so I was hoping that I wouldn't have to use it in the project, but I ultimately ended up using it and didn't hate it because I really felt strongly about using and API, and that's the only was I was able to get my API working. I even used jQuery, which is challenging and buggy to me. 

**API** - I really enjoyed working with the API, as it's the first time I've felt like I'm actually building something with some meat to it. It was nice seeing how I can use a resource like Foursquare to enhance my own project. 

### Example Code ###

This is the code for in css to make the boxes pop out and be responsive:

```
.resultCont {
  font-family: 'Quicksand', sans-serif;
  text-align: center;
  list-style: none;
  border: 1%;
  border-radius: 5px;
  background-color: rgb(252,252,252);
  width: 70%;
  height: 70%;
  flex: 1;
  padding-right: 30px;
  box-shadow: 3px 3px 4px -2px rgba(0,0,0,0.19);
  transition: box-shadow 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out;
}
```

## Build Strategy ###

I wanted to build an app I would use, so I started to think about things that I have that could be better. The shared Google docs as mentioned above just weren't cutting it, and my friends and I often forgot that it even existed. 

I first started off thinking about successful image apps that I use, such as Instagram, and how I could integrate them into a CRUD app and what features I liked about them. Foursquare, Pinterest, and Yelp all came to mind. I started looking through the API documentation since I knew that I also wanted to integrate an API into my app. 

### DAY 1 (Tues) ###
I created the wireframes using Balsamiq and came up with a solution that is similar to what I have as the final product. I then started to lay out the tables I would have and came up with a list of features I wanted to include. I narrowed the list down to things I could make for MVP and things that would have to wait until I had more time. 

### Wireframes ###

### MY FEED WIREFRAME ####

![Gram Central Station My Feed Wireframe](/assets-proposal/my-feed.png "Gram Central Station My Feed")

### EDIT ITEM WIREFRAME ####

![Gram Central Station Edit Item Wireframe](/assets-proposal/edit-item.png "Gram Central Station Edit Item")

### TABLES WIREFRAME ####

![Gram Central Station Table Wireframe](/assets-proposal/tables.png "Gram Central Station Tables")


### DAY 2 (Wed) ###
I started to code, and ultimately got stuck fairly early on when making my database on how to integrate the two tables since we didn't have a lecture on how to set them up for an entire day. At the end of the day, I was very frustrated because I wanted to be further along with my code during the day so that I would be able to work on the basic HTML and CSS at night. I'm a visual person so it's very helpful to me to have things render in the right place so that I can see what I need to work on next. I eventually decided to give the databases a rest and recharge by doing the HTML and CSS at night as planned.

### DAY 3 (Thur) ###
I solved the database issue first thing when I got to class, proving that good night's rest is so helpful for your mind. I finished the basic CRUD app the rest of the day, and stayed late to talk to the TAs about how to use the Foursquare API and try to get it set up. Initially I wanted to create a visual feed of what's trending on Foursquare's API, as well as a search page where you can visually search by item and location. Unfortunately, this wasn't going to end up working for me, as I was deep into making the API work when I realized that by searching, you cannot return a photo on their API. It would have to be two separate API calls, which wasn't what I wanted. 

### DAY 4 (Fri) ###
I finished setting up the Foursquare API with the new restructured plan of leaving the trending feed for post MVP since it wasn't going to be possible with the API I was using, and to restructure my search results into text only. I got stuck again for the entire day with the DOM manipulation. I was able to bring in the information, but my loop wasn't working correctly and there was a fundamental issue with the way I was building the page. Finally at the end of the day, I was able to solve the problem by changing my use of appending divs to divs to creating a ul and appending li elements to it. 

### DAY 5 (Sat) ###
I spend the entire day styling, which was totally my jam. I was able to spend a lot of time making the art and figuring out some cool CSS animations. I wanted to make my page look responsive, so I spent a lot of time toying with the CSS animation properties, as well as look around on photo sites like Pinterest/Instagram/Facebook to see how they discreetly added animations to make their pages responsive. At the end of the day I was very happy with the way it looked.

### DAY 6 (Sun) ###
My goal was to finish my project by Sunday night so I could have one day of relaxation on Labor Day. I spent the day fiddling with a few adjustments including adding a few additional features, like linking the search results to the original source websites and trying to figure out how to hide my API keys. 

## Future Improvements ###
I would like to use a different API where I can source pictures as well as search what's trending and do a general search in a specific location. Unfortunately I realized when I was already deep into the path of the Foursquare API that I would have to do two separate calls to do that, and it was more complicated than I could handle. 

I would also like to learn how to use a cloud based API to store the images. I was unable to wade through the documentation and figure out how to implement, so I would need to have more time to fiddle with it and ask someone a few specific questions about it. 

I would also like to be able to create a user access point so that the user only can see what they've posted and is in their feed. Currently, anyone who uses the site can add and access everyone's images. 

Post post post MVP, I would love for users to be able to collaborate on feeds, so that people can share with others the images that they save, as you never want to go on a gram adventure without a friend (because then who would take your picture?).

### Issues to solve ###
The pictures render slowly when they are large files, so I would love to be able to get a cloud based API working, however, I was able to scale down my photos that I have in my database so they load quickly. 
