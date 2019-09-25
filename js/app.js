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

  updateStorage();
}

// FavoriteItem.prototype.favorite = function () {
//   console.log('hey over here!,');
// };

// create random function
// to select from array of images
// return random number between 0-1
function randomFavoriteItem() {
  var randomFavoriteItem = Math.floor(Math.random() * allImages.length);
  console.log(allImages.length);
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
  var data = localStorage.getItem('allImages');
  var parsedData = JSON.parse(data);
  console.log('parsedData', parsedData);

  for (var i = 0; i < parsedData.allImages; i++) {
    new FavoriteItem(parsedData[i].name, parsedData[i].image, parsedData[i].clicked, parsedData[i].views);
  }

  renderFavoriteItem();
}


// function displayImage(){
//   var randomImages = [];
//   randomImages[0] = randomFavoriteItem();
//   randomImages[1] = randomFavoriteItem();

//   while(randomImages[0] === randomImages[1]) {
//     console.log('double trouble');
//     randomImages[1] = randomFavoriteItem();
//   }
//   randomImages[2] = randomFavoriteItem();
//   while(randomImages[2] === randomImages[1] || randomImages[2] === randomImages[0]){
//     console.log('double trouble');
//     randomImages[2] = randomFavoriteItem();
//   }
//   for(var i = 0; i < 3; i++) {

//   }
// }

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

updateStorage();
getClickData();
favoriteItemImage.addEventListener('click', clickedOnFavorite);
// console.log(allImages);

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
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




