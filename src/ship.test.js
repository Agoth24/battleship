const Ship = require('./ship')

describe("testing the ship module's construction of objects", () => {
  test("testing proper construction of ships", () => {
    expect(Ship(4).length).toEqual(4)
  });

  test("testing another proper construction of ships", () => {
      const ship = Ship(5);
      ship.hit();
      expect(ship.timesHit).toBe(1);
});
});

test("testing the functionality of the hit method", () => {
    const ship = Ship(3);
    const spy = jest.spyOn(ship, "hit");

    ship.hit();
    expect(spy).toHaveBeenCalled();
    expect(ship.timesHit).toBe(1);
    ship.hit()
    expect(ship.timesHit).toBe(2);
})

test("testing the isSunk property of the ship module", () => {
    const ship = Ship(2);  
    expect(ship.isSunk).toBe(false);
    
    ship.hit();
    expect(ship.isSunk).toBe(false); // Still not sunk after 1 hit
    
    ship.hit();
    expect(ship.isSunk).toBe(true); // Should be sunk after 2 hits (length = 2)
})