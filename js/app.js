// 'use strict';

// global variable
var favoriteItemImage = document.getElementById('favoriteImages');
var leftFavorite = document.getElementById('leftFavorite');
var centerFavorite = document.getElementById('centerFavorite');
var rightFavorite = document.getElementById('rightFavorite');

var leftFavoriteIndex = null;
var centerFavoriteIndex = null;
var rightFavoriteIndex = null;

var favoriteVote = 0;

FavoriteItem.allimages = [];

//  constructor Function for object assoctiated with each product
function FavoriteItem(name, image) {
  this.name = name;
  this.image = image;
  this.clicked = 0;
  this.views = 0;

  // logic of pushing images
  FavoriteItem.allImages.push(this);

}

// create random function
// to select from array of images
// return random number between 0-1
function randomFavoriteItem() {
  var randomNumber = Math.floor(Math.random() * FavoriteItem.allImages.length);
  return randomNumber;
}

// create function to render to screen
function renderFavoriteItem() {
  // create variables to distinguish from each picture and give random images while a certain condition is true
  do {
    leftFavoriteIndex = randomFavoriteItem();
    centerFavoriteIndex = randomFavoriteItem();
    rightFavoriteIndex = randomFavoriteItem();
    console.log(leftFavoriteIndex);
    console.log(centerFavoriteIndex);
    console.log(rightFavoriteIndex);
  } while (leftFavoriteIndex === centerFavoriteIndex || centerFavoriteIndex === rightFavoriteIndex || rightFavoriteIndex === leftFavoriteIndex);

  FavoriteItem.allimages[leftFavoriteIndex].views++;
  FavoriteItem.allimages[centerFavoriteIndex].views++;
  FavoriteItem.allimages[rightFavoriteIndex].views++;

  // source of the image tags to the specific picture of the array
  leftFavorite.src = FavoriteItem.allImages[leftFavoriteIndex].image;
  centerFavorite.src = FavoriteItem.allImages[centerFavoriteIndex].image;
  rightFavorite.src = FavoriteItem.allImages[rightFavoriteIndex].image;
  // function expression
  var clickedOnFavorite = function () {
    var favoriteClicked = event.target.id;

    if (favoriteClicked === 'leftFavorite' || favoriteClicked === 'centerFavorite' || favoriteClicked === 'rightFavorite') {

      favoriteVote++;
      // incrament favoritre clicked by one
      if (favoriteClicked === 'leftFavorite') {
        // do logic to increment number
        FavoriteItem.allImages[leftFavoriteIndex].clicked++;
      } else if (favoriteClicked === 'centerFavorite') {
        FavoriteItem.allImages[centerFavoriteIndex].clicked++;
      } else if (favoriteClicked === 'rightFavorite') {
        FavoriteItem.allImages[rightFavoriteIndex].clicked++;
      }
    } else {
      alert('You didn\'t select on image');
    }

    console.log(FavoriteItem.allImages[leftFavoriteIndex]);

    console.log(FavoriteItem.allImages[centerFavoriteIndex]);

    console.log(FavoriteItem.allImages[rightFavoriteIndex]);

    // check votes
    if (favoriteVote === 5) {
      favoriteItemImage.removeEventListener('click', clickedOnFavorite);

      console.log('You competed the voting.');

      // output to browser
      for (var i = 0; i < FavoriteItem.allImages.length; i++) {
        var FavoriteItem = FavoriteItem.allImages[i];
      }
    } else {
      renderFavoriteItem();
    }

  };

  FavoriteItem.allImages = [];

  new FavoriteItem('bag', 'images/bag.jpg');
  new FavoriteItem('banana', 'images/banana.jpg');
  new FavoriteItem('bathroom', 'images/bathroom.jpg');

  console.log(FavoriteItem.allImages);
  renderFavoriteItem();

  favoriteItemImage.addEventListener('click', clickedOnFavorite);

}
