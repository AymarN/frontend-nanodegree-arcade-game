# Classic Arcade Game Clone Project

## Table of Contents

FROGGER GAME DESCRIPTION

Your implementation must at minimum follow the basic functionality, but you can add additional optional functionality to your game, if you wish.

BASIC FUNCTIONALITY <br />
In this game you have a Player and Enemies (Bugs). The goal of the player is to reach the water, without colliding into any one of the enemies. <br />
The player can move left, right, up and down. The enemies move in varying speeds on the paved block portion of the scene. <br />
Once a the player collides with an enemy, the game is reset and the player moves back to the start square. <br />
Once the player reaches the water the game is won.<br />
![FROGGER GAME](https://docs.google.com/drawings/d/swAv5AN00tRIxfdzMdTy3yg/image?parent=1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc&rev=34&h=474&w=481&ac=1) <br />

ADDITIONAL FUNCTIONALITY <br />
In addition to the basic functionality, you can add more cool functionality to your game. For example, here are some additional<br />
features that you can add: <br />
Player selection: allow the user to select the image for the player character before starting the game. You can use the different character images <br />
provided in the images folder (we’ll get to that below). <br />
Score: you can implement a score for the game. For example, the score can increase each time the player reaches the water,  <br />
 and it can be reset to 0 when collision occurs (or it can be reduced). <br />
Collectables: you can add gems to the game, allowing the player to collect them to make the game more interesting. <br />
Anything else you like! <br />

GETTING STARTED <br />
You won’t have to build the game from scratch. We have provided the art assets and game engine for you.<br />
You can download or clone them from our repository.<br />
The repository contains css, images, and js folders, as well as an index.html and a README.md file.<br />
Once you have downloaded the files we have provided, you will have to edit app.js to build the game. <br />
The css folder contains a style.css file which you do not need to edit  <br />
The images folder contains the png image files, which are used when displaying the game. <br />
 The images for the player and enemy character are going to be loaded from this folder. <br />
The js folder also contains the app engine needed to run the game and a resources.js file. You do not need to edit these files. <br />
index.html - opening index.html should load the game  <br />

You will need to complete the following: <br />
The Enemy function, which initiates the Enemy by: <br />
Loading the image by setting this.sprite to the appropriate image in the image folder (already provided) <br />
Setting the Enemy initial location (you need to implement)  <br />
Setting the Enemy speed (you need to implement) <br />
The update method for the Enemy <br />
Updates the Enemy location (you need to implement) <br />
Handles collision with the Player (you need to implement) <br />
You can add your own Enemy methods as needed <br />
You will also need to implement the Player class, and you can use the Enemy class as an example on how to get started. <br />
At minimum you should implement the following: <br />
The Player function, which initiates the Player by: <br />
Loading the image by setting this.sprite to the appropriate image in the image folder. <br />
(use the code from the Enemy function as an example on how to do that) <br />

Setting the Player initial location <br />
The update method for the Player (can be similar to the one for the Enemy)<br />
The render method for the Player (use the code from the render method for the Enemy)<br />
The handleInput method, which should receive user input, allowedKeys (the key which was pressed) and move the player according to that input. <br />

In particular: <br />
Left key should move the player to the left, right key to the right, up should move the player up and down should move the player down. <br />
Recall that the player cannot move off screen (so you will need to check for that and handle appropriately). <br />
If the player reaches the water the game should be reset by moving the player back to the initial location  <br />
(you can write a separate reset Player method to handle that). <br />
You can add your own Player methods as needed. <br />
Once you have completed implementing the Player and Enemy, you should instantiate them by: <br />
Creating a new Player object  <br />
Creating several new Enemies objects and placing them in an array called allEnemies  <br />
Adding your own  <br />

If you would like you can add additional functionality to the game. You can add more code to the app.js file and to the Enemy  <br />
and Player classes to accomplish that. <br />

## Instructions
Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

