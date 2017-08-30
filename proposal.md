*** Aileen Wong 8/29/17 ***

# Gram Central Station ###

### What is Gram Central Station? ###

Everyone is looking for the next big social media photo. Foodies, wannabe celebs, and normal people are all flocking to the latest hotspot dishing out fish shaped ice cream cones, rainbow cakes and bacon covered everything. 

Unfortunately the market is saturated with rainbow bagels, so Gram Central Station is a place for users to find the next big thing and save it for their next adventures. Users can create their own posts with a photo, description and location. They can also look through a feed of photos to get inspiration. 

### Wireframe ###

#### Home Page ###
![Home page](assets/index.png)

#### My Feed ###
![My feed](assets/my-feed.png)

#### Single Item ###
![Single Item](assets/single.png)

#### Add New ###
![Add New](assets/add-new.png)

#### Edit Item ###
![Edit Item](assets/edit-item.png)

#### Search Page ###
![Search Page](assets/search-page.png)

#### Search Feed ###
![Search Feed](assets/search-feed.png)

### Initial thoughts on structure ###

(Write out what challenges you expect to encounter, or ideas you want to come up with)

I will need to make an object that I can feed the questions into so I can generate new questions easily. I'm not sure how to achieve this, as each question will have to be different. I imagine when I expand the game beyond the one dog, the objects will be much more reusable (this probably won't happen within the project, but this is a post MVP goal. 

The art will also be a little time consuming, but I'm up for the challenge. I want to have a static dog body and a bobbing head, which I imagine can be done with css animation. I also want to have the boxes with my questions to animate into the screen. 

I'll need to really focus on writing the content for the questions and the dog's personality since it's largely a text based game. I want the game to be sassy and funny, so that people come back and play again to try to see the different responses. 

I'll need to put click event listeners on all of the questions and responses that are clickable, and have them each contain a value that will populate and show in the hearts. I'll also need to have a win function that checks at the end of the date if the player has acquired the requisite amount of hearts. 

I also want to be able for the user to type in their name so the dawg can continuously reference the player, just as a real date would be simulated. I need to figure out how I can store that value and continue to reuse that throughout the game. 

### Phases of Completion ###

(The steps or phases you expect to go through, and the tasks that you'll need to accomplish to reach each step. These should resemble the acceptance criteria we were working through earlier.)

I'll want to have a landing page with just an image of one dog, instructions, and a start button.  Then I'll have a play state page where the dog is fairly stationary and question boxes animate in and out. 

**Day 1:** First I'll style the HTML and CSS. I'll start generating a lot of the art in photoshop and bring in those images. Hopefully I can complete a lot of this in one day, so the next day I can come in and focus on the content and javascript. 

**Day 2:** I think I'll tackle the javascript with the start button & question object during the week when I have the help of instructors, classmates and TAs, and can focus on the content at home. I'll work with dummy questions until I've perfected the questions and answers. 

**Day 3:** I will hopefully have a partially working game at this point. I want to be able to build the heart counter and the javascript for the win state by Friday so I can start testing the game.

**Day 4&5:** Making tweaks, including populating real questions, adjusting any css & html issues, and perfecting any additional css animations. 

### Links and Resources ###

(Anything you've looked up so far or are thinking about using.)

**CSS Animations:**  
https://daneden.github.io/animate.css/
https://developer.mozilla.org/en-US/docs/Web/CSS/animation
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations

**Content Helpers:**  
https://www.slowdating.com/speed-dating/speed-dating-questions.aspx
https://thoughtcatalog.com/kendra-syrdal/2015/02/31-genuinely-interesting-questions-for-you-to-ask-your-next-date/
https://www.laptopmag.com/articles/10-weirdest-questions-asked-by-okcupid
