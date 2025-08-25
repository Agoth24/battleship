const Player = require("./player");

describe("testing player object construction", () => {
  test("testing the creation of a player and type of object", () => {
    const mockBoardFactory = jest.fn(() => [[]]); // Mock board factory function
    const player = Player("human", mockBoardFactory);
    expect(player.type).toBe("human");
  });

  test("confirming the player's board is 10x10", () => {
    const mockBoardFactory = jest.fn(() =>
      // Filled in from original gameboard implementation
      Array.from({ length: 10 }, () => Array(10).fill(null))
    );
    const player = Player("cpu", mockBoardFactory);
    expect(player.board.length).toBe(10);
    expect(player.board[0].length).toBe(10);
  });
});
