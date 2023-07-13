let model = {
  boardSize: 7,
  numShips: 3,
  shipLength: 3,
  shipsSunk: 0,
  ships: [{ locations: [0, 0, 0], hits: ['', '', '']},
          { locations: [0, 0, 0], hits: ['', '', '']},
          { locations: [0, 0, 0], hits: ['', '', '']}],
  fire: function(guess) {
    for(let i = 0; i < this.numShips; i++) {
      // console.log
      let ship = this.ships[i];
      let index = ship.locations.indexOf(guess);
      if(index >= 0){
        ship.hits[index] = 'hit';
        view.displayHit(guess);
        view.displayMessage('HIT!');
        if(this.isSunk(ship)) {
          view.displayMessage('You sank enemy battleship!');
          this.shipsSunk++;
        }
        return true;
      }
    }
    view.displayMiss(guess);
    view.displayMessage('MISS!');
    return false;
  },
  isSunk: function(ship) {
    // console.log
    for(let i = 0; i < this.shipLength; i++) {
      if (ship.hits[i] !== 'hit') {
        return false;
      }
    }
    return true;
  },

  generateShipLocations: function() {
    let locations;
    for(let i = 0; i < this.numShips; i++) {
      do {
        locations = this.generateShip();
      }while(this.collision(locations));
      this.ships[i].locations = locations;
    }
  },
  generateShip: function() {
    let direction = Math.floor(Math.random() * 2);
    let row, col;
    let newShipLocations = [];
      for(let i = 0; i < this.shipLength; i++) {
        if(direction === 1) {
          row = Math.floor(Math.random() * this.boardSize);
          col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
          newShipLocations.push(row + '' + (col+1));
      }else {
        row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
        col = Math.floor(Math.random() * this.boardSize);
        newShipLocations.push((row+1) + '' + col);
      }
    }
    return newShipLocations;
  },
  collision: function(locations) {
    for(let i = 0; i < this.numShips; i++) {
      let ship = model.ships[i];
      for(let j =0; j < locations.length; j++) {
        if(ship.locations.indexOf(locations[j]) >= 0) {
          return true;
        }
      }
    }
    return false;
  },
};

let view = {
  displayMessage: function(msg) {
    let messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
  },
  displayHit: function(location) {
    let cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },
  displayMiss: function(location){
    let cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  },
};

let controller = {
  guesses: 0,
  processGuess: function(guess) {
    let location = parseGuess(guess);
    if(location) {
      this.guesses++;
      let hit = model.fire(location);
      if(hit && model.shipsSunk === model.numShips) {
        view.displayMessage("You sank all battleship, in " + this.guesses + " guesses");
      }
    }
  }
};

function parseGuess(guess) {
  let abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  if(guess === null || guess.length !== 2) {
    alert("Error data!");
  }else {
    firstChar = guess.charAt(0);
    let row = abc.indexOf(firstChar);
    let column = guess.charAt(1);
    if(isNaN(row) || isNaN(column)) {
      alert("Opps, is not right");
    } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
      alert('Opps, is not right!');
    } else {
      return row + column;
    }
  }
  return null;
}

function init() {
  let fireButton = document.getElementById('fireButton');
  fireButton.onclick = handleFireButton;
  let guessInput = document.getElementById('guessInput');
  guessInput.onkeypress = handleKeyPress;

  model.generateShipLocations();
}

function handleFireButton() {
  let guessInput = document.getElementById('guessInput');
  let guess = guessInput.value;
  controller.processGuess(guess);
  guessInput.value = '';
}

function handleKeyPress(e) {
  let fireButton = document.getElementById("fireButton");
  if(e.keyCode === 13) {
    fireButton.click();
    return false;
  }
}


window.onload = init;

// controller.processGuess('A0');

// controller.processGuess('A6');
// controller.processGuess('B6');
// controller.processGuess('C6');

// controller.processGuess('C4');
// controller.processGuess('D4');
// controller.processGuess('E4');

// controller.processGuess('B0');
// controller.processGuess('B1');
// controller.processGuess('B2');