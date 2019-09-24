// 'use strict';

// global variables
var favoriteItemImage = document.getElementById('favoriteImages');
var leftImage = document.getElementById('leftImage');
var centerImage = document.getElementById('centerImage');
var rightImage = document.getElementById('rightImage');
var leftIndex = null;
var centerIndex = null;
var rightIndex = null;

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
    leftIndex = randomFavoriteItem();
    centerIndex = randomFavoriteItem();
    rightIndex = randomFavoriteItem();
  } while (leftIndex === centerIndex || centerIndex === rightIndex || rightIndex === leftIndex);

  // source of the image tags to the specific picture of the array
  leftImage.src = FavoriteItem.allimages[leftIndex].image;
  centerImage.src = FavoriteItem.allimages[centerIndex].image;
  rightImage.src = FavoriteItem.allimages[rightIndex].image;
}

// function expression
var clickedOnFavorite = function(event) {
  var favoriteClicked = event.target.id;

  if (favoriteClicked === 'leftImage' || favoriteClicked === 'centerImage' || favoriteClicked === 'rightImage'){
    favoriteVote++;
    // incrament favoritre clicked by one
    if (favoriteClicked === 'leftImage') {
      // do logic to increment number
      FavoriteItem.allimages[leftIndex].clicked++;
    } else if (favoriteClicked === 'centerImage') {
      FavoriteItem.allimages[centerIndex].clicked++;
    } else if (favoriteClicked === 'rightImage') {
      FavoriteItem.allimages[rightIndex].clicked++;
    }
  } else {
    alert('You didn\'t select on image');
  }

  console.log(FavoriteItem.allimages[leftIndex]);

  console.log(FavoriteItem.allimages[centerIndex]);

  console.log(FavoriteItem.allimages[rightIndex]);

  // check votes
  if (favoriteVote === 5) {
    favoriteItemImage.removeEventListener('click', clickedOnFavorite);

    console.log('You competed the voting.');

    // output to browser
    for (var i = 0; i < FavoriteItem.allimages.length; i++)
    {
      var Favorite = FavoriteItem.allimages[i];
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


