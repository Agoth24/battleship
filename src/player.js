function Player(type, board) {
  const instanceBoard = board();

  return {
    type,
    board: instanceBoard,
  };
}

module.exports = Player;
