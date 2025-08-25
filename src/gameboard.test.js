const Gameboard = require('./Gameboard')

test("checking that the gameboard returns an array", ()=> {
    expect(Array.isArray(Gameboard.board)).toBe(true)
})

test("checking that the gameboard array is 10x10", ()=> {
    expect(Gameboard.board.length).toBe(10)
    expect(Gameboard.board[0].length).toBe(10)
})

test("checking that ships can be placed on the gameboard", ()=> {
    const mockShip = { length: 3, hit: jest.fn(), isSunk: false }
    Gameboard.placeShip(mockShip, [0,0])
    expect(Gameboard.board[0][0]).toBe(mockShip)
})