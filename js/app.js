// 'use strict'

// global variable
var favoriteItemImage = document.getElementById('favoriteImages');
var leftFavorite = document.getElementById('leftFavorite');
var centerFavorite = document.getElementById('centerFavorite');
var rightFavorite = document.getElementById('rightFavorite');

var leftFavoriteIndex = null;
var centerFavoriteIndex = null;
var rightFavoriteIndex = null;

var randomImage = [];

var favoriteVote = 0;

var allImages = [];

var imageContainer = [leftFavorite, centerFavorite, rightFavorite];

var labelsArray = [];
var viewsArray = [];
var clicksArray = [];

var imageIndex = ['leftFavoriteIndex', 'centerFavoriteIndex', 'rightFavoriteIndex'];
//  constructor Function for object assoctiated with each product
function FavoriteItem(name, image) {
  this.name = name;
  this.image = image;
  this.clicked = 0;
  this.views = 0;

  // logic of pushing images
  allImages.push(this);
}

// FavoriteItem.prototype.favorite = function () {
//   console.log('hey over here!,');
// };

// create random function
// to select from array of images
// return random number between 0-1
function randomFavoriteItem() {
  var randomFavoriteItem = Math.floor(Math.random() * allImages.length);
  return randomFavoriteItem;
}
function updateStorage() {
  // saves clicks into local storage

  // convert array of objects into a JSON string
  var jsonString = JSON.stringify(allImages);
  localStorage.setItem('allImages', jsonString);
}

// create function that gets the data from local storage
// sets global array to the data from local storage
function getClickData() {
  if (localStorage.getItem('allImages')) {
    var data = localStorage.getItem('allImages');
    var parsedData = JSON.parse(data);

    for (var i = 0; i < parsedData.length; i++) {
      new FavoriteItem(parsedData[i].name, parsedData[i].image, parsedData[i].clicked, parsedData[i].views);
    }
  } else {
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
  }
  displayImage();
}

var displayImage = function () {
  // store 6 different images here

  while (randomImage.length < 6) {
    var tempRand = randomFavoriteItem();
    if (!randomImage.includes(tempRand)) {
      randomImage.push(tempRand);
    }
  }
  console.log(randomImage);
  for (var i = 0; i < imageContainer.length; i++) {
    var temp = randomImage.shift();
    console.log(temp);
    imageContainer[i].src = allImages[temp].image;

    allImages[temp].views++;

    if (imageIndex[i] === 'leftFavoriteIndex') {
      leftFavoriteIndex = temp;
    } else if (imageIndex[i] === 'centerFavoriteIndex') {
      centerFavoriteIndex = temp;
    } else {
      rightFavoriteIndex = temp;
    }
  }
  if (favoriteVote === 25) {
    console.log('You competed the voting.');
    favoriteItemImage.removeEventListener('click', clickedOnFavorite);

    updateStorage();
    chartData();
    chartRender();
  }
  console.log(randomImage);
};

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
  displayImage();
}
// displayImage();
// updateStorage();
getClickData();

favoriteItemImage.addEventListener('click', clickedOnFavorite);
// console.log(allImages);

function chartData() {
  for (var i = 0; i < allImages.length; i++) {
    labelsArray.push(allImages[i].name);
    clicksArray.push(allImages[i].clicked);
    viewsArray.push(allImages[i].views);
  }
}

function chartRender() {
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labelsArray,
      datasets: [{
        label: '# of Votes',
        data: clicksArray,
        backgroundColor: [
          'blue',
          'blue',
          'blue',
          'blue',
          'blue',
          'blue',
          'blue',
          'blue',
          'blue',
          'blue',
          'blue',
          'blue',
          'blue',
          'blue',
          'blue',
          'blue',
          'blue',
          'blue',
          'blue',
          'blue'
        ],
        borderColor: [
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black'
        ],
        borderWidth: 1,
      },
      {
        label: '# of Views',
        data: viewsArray,
        backgroundColor: [
          'red',
          'red',
          'red',
          'red',
          'red',
          'red',
          'red',
          'red',
          'red',
          'red',
          'red',
          'red',
          'red',
          'red',
          'red',
          'red',
          'red',
          'red',
          'red',
          'red'
        ],
        borderColor: [
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black'
        ],
        borderWidth: 1,
      }],
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
          },
        }],
      },
    },
  });
}
