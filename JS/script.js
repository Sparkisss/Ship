/*
let scores = [60, 50, 60, 58, 54, 54,
              58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51,
              69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18,
              41, 53, 55, 61, 51, 44];

let costs = [.25, .27, .25, .25, .25, .25,
              .33, .31, .25, .29, .27, .22,
              .31, .25, .25, .33, .21, .15,
              .37, .15, .28, .25, .24, .22,
              .20, .25, .30, .25, .24, .25,
              .25, .25, .27, .25, .26, .29];


function getResult(scores) {
  let highResult = 0;
  for(let i = 0; i < scores.length; i++) {
    console.log("Index: " + i + " value: " + scores[i]);;
    if(highResult < scores[i]) {
      highResult = scores[i];
    }
  }
  return highResult;
}
highResult = getResult(scores);
let array = [];
function getAttemt (scores, highResult) {
  
  for(i = 0; i < scores.length; i++) {
    if(highResult == scores[i]) {
      array.push(i);
    }
  }
  return array;
}

function getKey(scores, costs, highResult) {
  let value = 100;
  let index;
  for(i = 0; i < scores.length; i++) {
    if(scores[i] == highResult && costs[i] < value) {
      value = costs[i];
      index = i;
    }
  }
  return index;
}
index = getKey(scores, costs, highResult);
array = getAttemt(scores, highResult);
console.log("Bubbles tests: " + scores.length);
console.log("The best result is: " + highResult);
console.log("The best index: " + array);
console.log("Index of the best bubble: " + index);

function century(year) {
  // Finish this :)
  if(year % 100 > 0) {
    year = Math.floor(year / 100) + 1;
  }else {
    year = year / 100;
  }
  
  return year;
}
year = century(1900);
console.log("Century: " + year);
let chevy = {
  make: "Chevy",
  model: "Bel Air",
  year: 1957,
  color: "red",
  passenger: 2,
  convertible: false,
  mileage: 1021,
  fuel: 0,
  started: false,
  start: function() {
    if(this.fuel > 0) {
      this.started = true;
    }else {
      console.log("You need fuel up");
    }
    
  },
  stop: function() {
    this.started = false;
  },
  drive: function() {
    if(this.started && this.fuel > 0) {
      console.log("You drive.");
      this.fuel = this.fuel - 1;
    }else if(this.fuel <= 0){
      console.log("You don't have fuel!");
    }else {
      console.log("Start your engine!");
    }
  },
  addFuel: function(amount) {
    this.fuel += amount; 
  }
};

chevy.start();
chevy.drive();
chevy.stop();
chevy.addFuel(2);
*/

function Duck (sound) {
  this.sound = sound;
  this.quack = function() {
    console.log(this.sound);
  }
}
let toy = new Duck("quack, quack");
toy.quack();
console.log(typeof toy);
console.log(toy instanceof Duck);