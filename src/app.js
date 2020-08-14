// DOM Objects
const mainScreen = document.querySelector(".main-screen");
const pokeName = document.querySelector(".poke-name");
const pokeId = document.querySelector(".poke-id");
const pokeFrontImage = document.querySelector(".poke-front-image");
const pokeBackImage = document.querySelector(".poke-back-image");
const pokeTypeOne = document.querySelector(".poke-type-one");
const pokeTypeTwo = document.querySelector(".poke-type-two");
const pokeHeight = document.querySelector(".poke-height");
const pokeWeight = document.querySelector(".poke-weight");

// constants and variables

const TYPES = [
  "normal",
  "fighting",
  "flying",
  "poinson",
  "ground",
  "rock",
  "bug",
  "ghost",
  "steel",
  "fire",
  "water",
  "grass",
  "electric",
  "ice",
  "dragon",
  "dark",
  "fairy"
];

// Funtions

const resetScreen = () => {
  for (const type of TYPES) {
  }
};

fetch("https://pokeapi.co/api/v2/pokemon/groudon")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    mainScreen.classList.remove("normal");

    const dataTypes = data["types"];
    const dataFirstType = dataTypes[0];
    const dataSecondType = dataTypes[1];

    pokeTypeOne.textContent = dataFirstType["type"]["name"];
    if (dataSecondType) {
      pokeTypeTwo.textContent = dataSecondType["type"]["name"];
      pokeTypeTwo.classList.remove("hide");
    } else {
      pokeTypeTwo.classList.add("hide");
      pokeTypeTwo.textContent = "";
    }

    mainScreen.classList.add(dataFirstType["type"]["name"]);
    mainScreen.classList.remove("hide");

    pokeName.textContent = data["name"];
    pokeId.textContent = data["id"];
    pokeWeight.textContent = data["weight"];
    pokeHeight.textContent = data["height"];
    pokeFrontImage.src = data["sprites"]["front_default"] || "";
    pokeBackImage.src = data["sprites"]["back_default"] || "";
  });
