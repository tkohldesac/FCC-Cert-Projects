console.clear();

console.log("Start Script!");
//Declare buttons

const btnPrevPkmn = document.querySelector("#btnPrevPkmn");
const btnNextPkmn = document.querySelector("#btnNextPkmn");
const btnStats = document.querySelector("#btnStats");
const btnEntry = document.querySelector("#btnEntry");

//Declare elements for use below

//Sprite
let sprite = document.querySelector("#imgSprite").src;
//Pokemon Number
let pkmnNum = document.querySelector(".pkmnNum");
//Pokemon Name
let pkmnName = document.querySelector(".pkmnName");
// Pokemon Stats
let pkmnStats = document.querySelector("#pkmnStats");
// Pokemon Entry
let pkmnEntry = document.querySelector("#pkmnEntry");
// API URL
let apiUrl = "https://pokeapi.co/api/v2/pokemon/";
//Initialize pokemon selection
let currentPkmnNum = 0;
//Initialize full URL
let newUrl = `${apiUrl}${currentPkmnNum}`;
// Variable to assign imported data to
let allData;

//Declare text to be changed

//Set Events for buttons
// Previous Pokemon button
btnPrevPkmn.addEventListener("click", () => {
  console.log("Clicked Prev!");
  if (currentPkmnNum > 0) {
    currentPkmnNum -= 1;
  }
  newUrl = `${apiUrl}${currentPkmnNum}`;
  fetchPokemon();
  changeStuff();
});

//Next Pokemon button
btnNextPkmn.addEventListener("click", () => {
  console.log("Clicked Next!");
  currentPkmnNum += 1;
  newUrl = `${apiUrl}${currentPkmnNum}`;
  fetchPokemon();
  changeStuff();
});
//Stats Page button
btnStats.addEventListener("click", () => {
  console.log("Clicked Stats!");
  pkmnStats.classList.remove("d-none");
  pkmnEntry.classList.add("d-none");
  pkmnEntry.classList.add("d-block");
});
//Entry Page button
btnEntry.addEventListener("click", () => {
  console.log("Clicked Entry!");
  pkmnEntry.classList.remove("d-none");
  pkmnStats.classList.add("d-block");
  pkmnStats.classList.add("d-none");
});

async function fetchPokemon() {
  await fetch(`${newUrl}`)
    .then((response) => response.json())
    .then((data) => {
      allData = data;
      console.log("allData loaded!");
      //Initialize Values
      document.querySelector(".pkmnNum").value = currentPkmnNum;
      document.querySelector(".pkmnName").value = allData.species.name;
      document.querySelector("#imgSprite").src = allData.sprites.front_default;
    });
}

//data is initializing before fetchPokemon finishes. Need to set this up to change.

function changeStuff() {
  document.querySelector(".pkmnNum").value = currentPkmnNum;
  console.log(currentPkmnNum);

  document.querySelector(".pkmnName").value = allData.species.name;
  // document.querySelector("#imgSprite").src = allData.sprites.front_default;
  changeImage();
}

function changeImage() {
  if (currentPkmnNum > 0) {
    document.querySelector("#imgSprite").src = allData.sprites.front_default;
  } else {
    document.querySelector("#imgSprite").src =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png";
  }
}
