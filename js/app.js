// 'use strict';

// global variables
var favoriteItemImage = document.getElementById('favoriteImages');
var leftFavorite = document.getElementById('leftFavorite');
var centerFavorite = document.getElementById('centerFavorite');
var rightFavorite = document.getElementById('rightFavorite');
var leftFavoriteIndex = null;
var centerFavoriteIndex = null;
var rightFavoriteIndex = null;

var favoriteVote = 0;


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

  // source of the image tags to the specific picture of the array
  leftFavorite.src = FavoriteItem.allimages[leftFavoriteIndex].image;
  centerFavorite.src = FavoriteItem.allimages[centerFavoriteIndex].image;
  rightFavorite.src = FavoriteItem.allimages[rightFavoriteIndex].image;
}

// function expression
var clickedOnFavorite = function(event) {
  var favoriteClicked = event.target.id;

  if (favoriteClicked === 'leftFavorite' || favoriteClicked === 'centerFavorite' || favoriteClicked === 'rightFavorite'){
    favoriteVote++;
    // incrament favoritre clicked by one
    if (favoriteClicked === 'leftFavorite') {
      // do logic to increment number
      FavoriteItem.allimages[leftFavoriteIndex].clicked++;
    } else if (favoriteClicked === 'centerFavorite') {
      FavoriteItem.allimages[centerFavoriteIndex].clicked++;
    } else if (favoriteClicked === 'rightFavorite') {
      FavoriteItem.allimages[rightFavoriteIndex].clicked++;
    }
  } else {
    alert('You didn\'t select on image');
  }

  console.log(FavoriteItem.allimages[leftFavoriteIndex]);

  console.log(FavoriteItem.allimages[centerFavoriteIndex]);

  console.log(FavoriteItem.allimages[rightFavoriteIndex]);

  // check votes
  if (favoriteVote === 5) {
    favoriteItemImage.removeEventListener('click', clickedOnFavorite);

    console.log('You competed the voting.');

    // output to browser
    for (var i = 0; i < FavoriteItem.allimages.length; i++)
    {
      var favorite = FavoriteItem.allimages[i];
    }
  } else {
    renderFavoriteItem();
  }

};

FavoriteItem.allimages = [];

new FavoriteItem('bag', 'images/bag'.jpg.url);
new FavoriteItem('banana', 'images/banana.jpg.url');

console.log(FavoriteItem.allimages);
renderFavoriteItem();

favoriteItemImage.addEventListener('click', clickedOnFavorite);


