'use strict';

// Check 4 digit pin.
const EXPECTED_PIN = '4967';
const checkPin = (...code) => code.join('') === EXPECTED_PIN;

const press = (code) => ({
  res: code,
  press(value) {
    this.res += value;
    if (this.res.length < 4) {
      return this;
    }
    return checkPin(this.res);
  }
});

module.exports = { press };
