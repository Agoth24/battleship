function Ship(length) {
// Private variable to track hits
  let timesHit = 0;

  function hit() {
    timesHit++;
  }
  return {
    length,
    hit,
    get timesHit() {
      return timesHit;
    },
    get isSunk() {
      return timesHit >= length;
    },
  };
}

module.exports = Ship;
