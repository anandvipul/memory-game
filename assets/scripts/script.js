const cardsArray = [
  {
    name: "shell",
    img: "assets/media/img/blueshell.png",
  },
  {
    name: "star",
    img: "assets/media/img/star.png",
  },
  {
    name: "bobomb",
    img: "assets/media/img/bobomb.png",
  },
  {
    name: "mario",
    img: "assets/media/img/mario.png",
  },
  {
    name: "luigi",
    img: "assets/media/img/luigi.png",
  },
  {
    name: "peach",
    img: "assets/media/img/peach.png",
  },
  {
    name: "1up",
    img: "assets/media/img/1up.png",
  },
  {
    name: "mushroom",
    img: "assets/media/img/mushroom.png",
  },
  {
    name: "thwomp",
    img: "assets/media/img/thwomp.png",
  },
  {
    name: "bulletbill",
    img: "assets/media/img/bulletbill.png",
  },
  {
    name: "coin",
    img: "assets/media/img/coin.png",
  },
  {
    name: "goomba",
    img: "assets/media/img/goomba.png",
  },
];


//Grabing the div with an id of root
const game=document.getElementById("game");


// Creating a section with a class of grid
const grid = document.createElement("section");
grid.setAttribute('class', 'grid');

// Appending the grid section to the game div
game.appendChild(grid);



// For Each Item in the cardsArray assets.
cardsArray.forEach((item) => {

// Create a div
    const card = document.createElement('div');
// Apply a class top the created div
card.classList.add('card');
// Set the data-name attribute of the div to the cards Array name
card.dataset.name=item.name;
// Appply the background image of the div to the cardsArray image
card.style.backgroundImage = `url(${item.img})`;
// Append the div to the grid section
grid.appendChild(card);
})
