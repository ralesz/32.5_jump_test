const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints.js');

describe('calculateStylePoints', () => {
  it('should return 57', () => {
    const actual = calculateStylePoints([19, 19.5, 19, 19, 19]);

    const expected = '57';

    assert.equal(actual, expected);
  });

  it('should return 55.5', () => {
    const actual = calculateStylePoints([18.5, 19, 18.5, 18.5, 18.5]);

    const expected = '55.5';

    assert.equal(actual, expected);
  });
})