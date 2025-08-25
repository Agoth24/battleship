function Gameboard() {
  // Initialize a 10x10 array for the main board

  // create a 10x10 array without sharing row references
  const board = Array.from({ length: 10 }, () => Array(10).fill(null));
  const missedAttacks = [];

  // place a ship at given coordinates
  function placeShip(ship, coordinates) {
    const [x, y] = coordinates;
    board[x][y] = ship;
  }

  // handle an attack at given coordinates
  function receiveAttack(coordinates) {
    // deconstruct coordinates into x and y
    const [x, y] = coordinates;

    // the target is the element at board[x][y]
    const target = board[x][y];
    if (target) {
      // hit the target if it exists
      target.hit();
    } else {
      // or log the missed attack
      missedAttacks.push(coordinates);
    }
  }

  function checkAllShipsSunk() {
    // check if all ships on the board are sunk
    for (let row of board) {
      for (let cell of row) {
        if (cell && !cell.isSunk) {
          return false; // found a ship that is not sunk
        }
      }
    }
    return true; // all ships are sunk
  }

  // display the most recent missed attack
  function displayMissedAttack() {
    return `Missed Attack at: (${missedAttacks.pop()})`;
  }

  return {
    get board() {
      return board;
    },
    placeShip,
    receiveAttack,
    checkAllShipsSunk,
    displayMissedAttack,
  };
}

module.exports = Gameboard();
