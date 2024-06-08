# Fetch & Match

Fetch & Match is an interactive memory game which allows players to match pairs of cards.

To see the live version of the site click [here](https://nweying.github.io/fetch-and-match/)!

![The Fetch & Match Website shown on a range of devices](assets/readme-images/fetch&match-responsive.png)

## CONTENTS

* [User Experience (UX)](#User-Experience-UX)
  * [User Stories](#User-Stories)

* [Design](#Design)
  * [Colour Scheme](#Colour-Scheme)
  * [Typography](#Typography)
  * [Wireframes](#Wireframes)

* [Features](#Features)
    * [Accessibility](#Accessibility)

* [Technologies Used](#Technologies-Used)
  * [Languages Used](#Languages-Used)
  * [Frameworks, Libraries & Programs Used](#Frameworks-Libraries--Programs-Used)

* [Deployment & Local Development](#Deployment--Local-Development)
  * [Deployment](#Deployment)
  * [Local Development](#Local-Development)
    * [How to Fork](#How-to-Fork)
    * [How to Clone](#How-to-Clone)

* [Testing](#Testing)
  * [Testing User Stories](#Testing-User-Stories-from-User-Experience-UX-Section)
  * [HTML Validation](#HTML-Validation)
  * [CSS Validation](#CSS-Validation)
  * [JavaScript Validation](#JavaScript-Validation)
  * [Lighthouse](#Lighthouse)
  * [Browser Compatibility & Responsiveness](#Browser-Compatibility--Responsiveness)
  * [Bugs](#Bugs--Fixes)

* [Credits](#Credits)
  * [Acknowledgments](#Acknowledgments)

- - -

## User Experience (UX)

### Target Audience

Fetch & Match is designed to appeal to a broad audience, including:
* Children and Families: The cute dog graphics and simple gameplay make it a fun game for children, while also being an enjoyable activity for family bonding.
* Casual Gamers: Those looking for a quick and entertaining game to pass the time will find Fetch & Match engaging and easy to pick up.
* Dog Lovers: With its dog-themed cards, the game is a perfect match for dog enthusiasts of all ages.
* Memory Game Enthusiasts: Fans of memory and matching games will appreciate the challenge and satisfaction of completing the game.
* Individuals Seeking Cognitive Exercise: The game provides a fun way to improve memory and cognitive skills, appealing to those interested in brain training activities.

### User Stories

#### As a New User:
* I want to easily understand how to play the game so that I can start enjoying the game without confusion.

#### As a Returning User:
* I want to quickly start a new game so that I can immediately begin pairing cards.

#### As a Competitive Player:
* I want to see a timer that tracks my game completion time so that I can challenge myself to improve my speed.

#### As a User Who Made a Mistake:
* I want to restart the game without going back to the home page so that I can quickly correct my mistakes and try again.

#### As a User Who Finished the Game:
* I want to see my completion time once I pair all the cards so that I can know how long it took me to finish the game.

- - -

## Design

### Colour Scheme

![Fetch & Match Website Colour Palette](assets/readme-images/fetch&match-color-palette.png)

To reflect the playful theme of Fetch & Match and its adorable dog characters, I designed the website using a cheerful and vibrant color palette. The colour palette was created using the [Color Hunt](https://colorhunt.co/) website.

### Typography

'Lobster' from Google Fonts is used for the headings and 'GoodDog' from CDN fonts was used for the body text. These fonts were chosen to evoke a playful, game-like atmosphere.

### Wireframes

Wireframes were developed for mobile, tablet, and desktop devices, ensuring good user experience across various screen sizes.

**Home Page:**

![Home Page Wireframe](assets/readme-images/home-wireframe.png)

**Game Page:**

![Game Page Wireframe](assets/readme-images/game-wireframe.png)

**How to Play Page:**

![How to Play Page Wireframe](assets/readme-images/howtoplay-wireframe.png)

- - -

## Features

The website consists of three pages: the home page, the game page and the how-to-play page. 

* **Home Page**

  * The home page features the game title prominently, accompanied by two primary buttons: 'New Game' and 'How to Play'. Clicking 'New Game' takes users directly to the memory game, while 'How to Play' provides a helpful guide. To enhance user interaction, hovering over each button highlights the links.

* **Game Page**
  * At the top of the game page, a timer displays how long it takes the user to complete the game. Beside the timer are two buttons: 'Restart' and 'End Game.' Clicking 'Restart' resets the timer, while 'End Game' returns the user to the home page. Below these controls, users can engage in the memory game by clicking on hidden cards to reveal images. Matching pairs will remain flipped until the game is completed.
  
  * When the user successfully pairs all the cards, a pop-up message will appear, along with the time it took to complete the game. An 'OK' button allows the user to close the pop-up and return to the home page.

* **How to Play Page**
  * On the How to Play page, the user will find an explanation on how the memory game works. A button is provided to navigate back to the home page.

### Accessibility

The website adheres to accessibility guidelines, ensuring it is responsive and inclusive for all users.

- - -

## Technologies Used

### Languages Used

- HTML
- CSS
- JavaScript

### Frameworks, Libraries & Programs Used

- Bootstrap Version 5.3.3 - The framework provided code assist with the responsiveness and styling of the website.

- Balsamiq - To create wireframes for all pages.

- CDN Fonts - To import the fonts used on the website.

- Git - For version control.

- Gitpod - To write code for the website.

- Github - To save and store the files for the website.

- Google Fonts - To import the fonts used on the website.

- Google Dev Tools - To test and troubleshoot features, and assist with responsiveness and styling.

- JQuery - To manipulate the DOM and add event handlers.

- - -

## Deployment & Local Development

### Deployment

Github Pages was used to deploy the live website. The instructions to achieve this are below:

1. Log in (or sign up) to Github.
2. Find the repository for this project, [Fetch & Match Github](https://github.com/nweying/fetch-and-match).
3. Click on the Settings link.
4. Click on the Pages link in the left hand side navigation bar.
5. In the Source section, choose main from the drop down select branch menu. Select Root from the drop down select folder menu.
6. Click Save. Your live Github Pages site is now deployed at the URL shown.

### Local Development

#### How to Fork

To fork the Fetch & Match repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, [Fetch & Match Github](https://github.com/nweying/fetch-and-match).
3. Click the Fork button in the top right corner.

#### How to Clone

To clone the Fetch & Match repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, [Fetch & Match Github](https://github.com/nweying/fetch-and-match).
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3.
6. Press Enter. Your local clone will be created.

- - -

## Testing

### Testing User Stories from User Experience (UX) Section

All user stories have been thoroughly tested and validated for functionality and user experience.

-   #### New User Goals

    * I want to easily understand how to play the game so that I can start enjoying the game without confusion.

        When the user visits the home page, they will see a 'How to Play' button that provides a guide on playing the memory game.

        ![How to Play Screenshot](assets/readme-images/howtoplay-screenshot.png)
    
-   #### Returning User Goals

    * I want to quickly start a new game so that I can immediately begin pairing cards.

        When the user visits the home page, they can click the 'New Game' button to start a new game instantly displaying the game board with hidden cards.

        ![New Game Screenshot](assets/readme-images/homepage-screenshot.png)

-   #### Competitive Player Goals

    * I want to see a timer that tracks my game completion time so that I can challenge myself to improve my speed.

       During the game, the user can see a timer at the top of the page that starts counting as soon as the game begins and stops when all pairs are matched.

        ![Game Page Screenshot](assets/readme-images/timer-gamepage-screenshot.png)

-   #### Goals of a User Who made a Mistake

    * I want to restart the game without going back to the home page so that I can quickly correct my mistakes and try again.

      On the game page, the user can click the 'Restart' button to reset the game and timer instantly.
        
        ![Game Page Screenshot](assets/readme-images/restart-gamepage-screenshot.png)

-   #### Goals of a User Who Finished the Game

    * I want to see my completion time once I pair all the cards so that I can know how long it took me to finish the game.

      A pop-up appears displaying the completion time, and the user can close the pop-up and return to the home page by clicking 'OK.'
        
        ![Game Completion Screenshot](assets/readme-images/game-completion-screenshot.png)

### W3C Validator

The W3C Markup Validator, W3C CSS Validator Services and JSHint were used to validate every page of the project to ensure there were no syntax errors in the project.

### HTML Validation
 <details><summary>index.html</summary>
<img src="assets/readme-images/index.html-validation.png">
</details>

### CSS Validation
<details><summary>style.css</summary>
<img src="assets/readme-images/style.css-validation.png">
</details>

### JavaScript Validation
<details><summary>script.js</summary>
<img src="assets/readme-images/script.js-validation.png">
</details>

No errors found.

### Lighthouse

Lighthouse within Chrome Developer Tools was used to test performance on desktop and mobile.

<details><summary>Desktop</summary>
<img src="assets/readme-images/lighthouse-desktop.png">
</details>

<details><summary>Mobile</summary>
<img src="assets/readme-images/lighthouse-mobile.png">
</details>

### Browser Compatibility & Responsiveness

The website was tested on the following browsers:

- Google Chrome
- Mozilla Firefox
- Microsoft Egde
- Safari

The website underwent thorough responsiveness testing using Google Dev Tools across various screen sizes. 

## Bugs & Fixes

| **Bug** | **Fix** |
| ----------- | ----------- |
| Card images not appearing on deployed site | Corrected relative file path to ensure proper image display |
| Vertical scroll appearing at the right side of all pages | Set overflow to hidden in CSS |
| White space appearing at the bottom of the screen | Fix height adjustment of div in CSS |
| Total time not displaying on pop up messsage | Ensure that 'totalSeconds' is properly passed to the 'finalSeconds' element within the pop-up message |

- - -

## Credits

- [Stack Overflow](https://stackoverflow.com/) To help with debugging.
- [W3Schools](https://www.w3schools.com/howto/howto_css_flip_card.asp) To create a flip card.
- [Adobe Express](https://www.adobe.com/express/) To resize images.
- [Am I Responsive?](http://ami.responsivedesign.is/) To show the website images on a range of devices.
- [Freepik](https://www.freepik.com/) and [Vectezzy](https://www.vecteezy.com/) For all images used in website.

### Acknowledgements
I would like to thank:
- My mentor Mitko for his guidance and feedback.
- My Cohort Facilitator Kristyna for the tips and support.
- To Tutor Support and Student Care for prompt support on any issues I faced.
- To the CI Slack Community for advice and recommendations.

- - -
