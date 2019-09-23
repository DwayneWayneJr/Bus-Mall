// 'use strict';

// global variables
var favoriteItemImage = document.getElementById('favoriteImages');
var leftFavorite = document.getElementById('leftFavorite');
var centerFavorite = document.getElementById('fcenterFavorite');
var rightFavorite = document.getElementById('rightFavorite');
var leftFavoriteIndex = null;
var centerFavoriteIndex = null;
var rightFavoriteIndex = null;


//  constructor Function for object assoctiated with each product
function FavoriteItem(name, image) {
  this.name = name;
  this.image = image;
  this.clicked = 0;
  this.views = 0;

  // logic of pushing images
  FavoriteItem.allimages.push(this);
}

// create random function
// to select from array of images
// return random number between 0-1
function randomFavoriteItem() {
  var randomNumber = Math.floor(Math.random() * randomFavoriteItem.length);
  return randomNumber;
}

// create function to render to screen
function renderFavoriteItem() {

  // create variables to distinguish from each picture and give random images while a certain condition is true
  do {
    leftFavoriteIndex = randomFavoriteItem();
    centerFavoriteIndex = randomFavoriteItem();
    rightFavoriteIndex = randomFavoriteItem();
  } while (leftFavoriteIndex === centerFavoriteIndex || centerFavoriteIndex === rightFavoriteIndex || rightFavoriteIndex === leftFavoriteIndex);
}

renderFavoriteItem();
