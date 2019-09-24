// 'use strict'

// global variable
var favoriteItemImage = document.getElementById('favoriteImages');
var leftFavorite = document.getElementById('leftFavorite');
var centerFavorite = document.getElementById('centerFavorite');
var rightFavorite = document.getElementById('rightFavorite');

var leftFavoriteIndex = null;
var centerFavoriteIndex = null;
var rightFavoriteIndex = null;

var favoriteVote = 0;

var allImages = [];

//  constructor Function for object assoctiated with each product
function FavoriteItem(name, image) {
  this.name = name;
  this.image = image;
  this.clicked = 0;
  this.views = 0;

  // logic of pushing images
  allImages.push(this);

}

// create random function
// to select from array of images
// return random number between 0-1
function randomFavoriteItem() {
  var randomNumber = Math.floor(Math.random() * allImages.length);
  console.log(allImages.length);
  return randomNumber;
}

// create function to render to screen
function renderFavoriteItem() {
  // create variables to distinguish from each picture and give random images while a certain condition is true
  console.log(allImages);
  do {
    leftFavoriteIndex = randomFavoriteItem();
    centerFavoriteIndex = randomFavoriteItem();
    rightFavoriteIndex = randomFavoriteItem();
    console.log(leftFavoriteIndex);
    console.log(centerFavoriteIndex);
    console.log(rightFavoriteIndex);
  } while (leftFavoriteIndex === centerFavoriteIndex || centerFavoriteIndex === rightFavoriteIndex || rightFavoriteIndex === leftFavoriteIndex);


  allImages[leftFavoriteIndex].views++;
  allImages[centerFavoriteIndex].views++;
  allImages[rightFavoriteIndex].views++;

  // source of the image tags to the specific picture of the array
  leftFavorite.src = allImages[leftFavoriteIndex].image;
  centerFavorite.src = allImages[centerFavoriteIndex].image;
  rightFavorite.src = allImages[rightFavoriteIndex].image;

  console.log(allImages[leftFavoriteIndex]);

  console.log(allImages[centerFavoriteIndex]);

  console.log(allImages[rightFavoriteIndex]);

  // check votes
  if (favoriteVote === 5) {
    console.log('You competed the voting.');
    favoriteItemImage.removeEventListener('click', clickedOnFavorite);


    //   // output to browser
    //   for (var i = 0; i < allImages.length; i++) {
    //     var FavoriteItem = allImages[i];
    //   }
    // } else {
    //   renderFavoriteItem();
  }

}

function clickedOnFavorite(event) {
  var favoriteClicked = event.target.id;
  if (favoriteClicked === 'leftFavorite' || favoriteClicked === 'centerFavorite' || favoriteClicked === 'rightFavorite') {

    // console.log(favoriteClicked);
    favoriteVote++;
    // console.log(favoriteVote);
    // incrament favoritre clicked by one
    if (favoriteClicked === 'leftFavorite') {
      // do logic to increment number
      allImages[leftFavoriteIndex].clicked++;
      console.log(allImages[leftFavoriteIndex]);

    } else if (favoriteClicked === 'centerFavorite') {
      allImages[centerFavoriteIndex].clicked++;
    } else if (favoriteClicked === 'rightFavorite') {
      allImages[rightFavoriteIndex].clicked++;
    }
  } else {
    alert('You didn\'t select on image');
  }
  renderFavoriteItem();
}
new FavoriteItem('bag', 'images/bag.jpg');
new FavoriteItem('banana', 'images/banana.jpg');
new FavoriteItem('bathroom', 'images/bathroom.jpg');
new FavoriteItem('boots', 'images/boots.jpg');
new FavoriteItem('breakfast', 'images/breakfast.jpg');
new FavoriteItem('bubblegum', 'images/bubblegum.jpg');
new FavoriteItem('chair', 'images/chair.jpg');
new FavoriteItem('cthulhu', 'images/cthulhu.jpg');
new FavoriteItem('dog-duck', 'images/dog-duck.jpg');
new FavoriteItem('dragon', 'images/dragon.jpg');
new FavoriteItem('pen', 'images/pen.jpg');
new FavoriteItem('pet-sweep', 'images/pet-sweep.jpg');
new FavoriteItem('scissrs', 'images/scissors.jpg');
new FavoriteItem('shark', 'images/shark.jpg');
new FavoriteItem('sweep', 'images/sweep.png');
new FavoriteItem('tauntaun', 'images/tauntaun.jpg');
new FavoriteItem('unicorn', 'images/unicorn.jpg');
new FavoriteItem('usb', 'images/usb.gif');
new FavoriteItem('water-can', 'images/water-can.jpg');
new FavoriteItem('wine-glass', 'images/wine-glass.jpg');

console.log(allImages);
renderFavoriteItem();

favoriteItemImage.addEventListener('click', clickedOnFavorite);
// console.log(allImages);
