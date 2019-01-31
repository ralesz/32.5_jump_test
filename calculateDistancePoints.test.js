const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints.js');

describe('calculateDistancePoints', () => {
  describe('normal takeof', () => {
    it('should return 77', () => {
        const actual = calculateDistancePoints(106.5, 'normal', 98);

        const expected = '77';

        assert.equal(actual, expected);
    });

    it('should return 73', () => {
        const actual = calculateDistancePoints(104.5, 'normal', 98);

        const expected = '73';

        assert.equal(actual, expected);
    });
  });

  describe('big takeof', () => {
    it('should return 85.2', () => {
        const actual = calculateDistancePoints(134, 'big', 120);

        const expected = '85.2';

        assert.equal(actual, expected);
    });
  });

  describe('mammoth takeof', () => {
    it('should return 147.6', () => {
        const actual = calculateDistancePoints(223, 'mammoth', 200);

        const expected = '147.6';

        assert.equal(actual, expected);
    });
  });
});