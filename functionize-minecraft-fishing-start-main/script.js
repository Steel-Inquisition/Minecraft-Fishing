// Minecraft Fishing Simulator by Peter

// HTML Elements
let steveImgEl = document.getElementById("steve-img");
let alexImgEl = document.getElementById("alex-img");
let villagerImgEl = document.getElementById("villager-img");
let fishBtnEl = document.getElementById("fish-btn");
let resultImgEl = document.getElementById("result-img");
let codSpanEl = document.getElementById("cod-span");
let salmonSpanEl = document.getElementById("salmon-span");
let tropicalSpanEl = document.getElementById("tropical-span");
let pufferSpanEl = document.getElementById("puffer-span");

// Global (FOR NOW)
let character;

// Fish Event
fishBtnEl.addEventListener("click", catchFish);

function catchFish() {
  if (character === "steve") {
    // STEVE PROBABILITIES: cod (70%), salmon (20%), tropical (5%), puffer (5%)
    simulateCatch(0.7, 0.9, 0.95);
  } else if (character === "alex") {
    // ALEX PROBABILITIES: cod (10%), salmon (10%), tropical (30%), puffer (50%)
    simulateCatch(0.1, 0.2, 0.5);
  } else if (character === "villager") {
    // VILLAGER PROBABILITIES: cod (25%), salmon (25%), tropical (25%), puffer (25%)
    simulateCatch(0.25, 0.5, 0.75);
  }
}

function simulateCatch(catchCodPercent, catchSalmonPercent, catchTropicalPercent) {
  let randNum = Math.random();
  let fish;
  let type;
  let numCod = 0;
  let numSalmon = 0;
  let numTropical = 0;
  let numPuffer = 0;

  if (randNum < catchCodPercent) {
    fish = "Raw-Cod";
    type = "cod";
    numCod += gainFish(type);
    // codSpanEl.innerHTML = numCod; TAKE THIS TO gainFish later on.
  } else if (randNum < catchSalmonPercent) {
    fish = "Raw-Salmon";
    type = "salmon";
    numSalmon += gainFish(type);
  } else if (randNum < catchTropicalPercent) {
    fish = "Tropical-Fish";
    type = "tropical";
    numTropical += gainFish(type);
  } else {
    fish = "Pufferfish";
    type = "puffer";
    numPuffer += gainFish(type);
  }

  resultImgEl.src = "img/" + fish + '.png';

  console.log(numCod);
}

function gainFish() {

}

// Character Select
steveImgEl.addEventListener("click", selectSteve);
alexImgEl.addEventListener("click", selectAlex);
villagerImgEl.addEventListener("click", selectVillager);

function selectSteve() {
  selectCharacters("steve", "alex", "villager");
  character = "steve";
}

function selectAlex() {
  selectCharacters("alex", "steve", "villager");
  character = "alex";
}

function selectVillager() {
  selectCharacters("villager", "steve", "alex");
  character = "villager";
}

function selectCharacters(character, removeClass1, removeClass2) {
  document.getElementById(character + "-img").classList.add("active");
  document.getElementById(removeClass1 + "-img").classList.remove("active");
  document.getElementById(removeClass2 + "-img").classList.remove("active");
}