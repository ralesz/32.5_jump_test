const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints.js');

describe('calculateTotalPoints', () => {
  describe('normal takeof', () => {
    it('should return 122.8', () => {
        const actual = calculateTotalPoints(103.5, 'normal', 98, [18.5, 18, 18.5, 18.5, 18.5], 6.4, -10.1);

        const expected = '122.8';

        assert.equal(actual, expected);
    });

    it('should return 131.8', () => {
        const actual = calculateTotalPoints(111, 'normal', 98, [19, 19.5, 19, 19, 19], 3.2, -14.4);

        const expected = '131.8';

        assert.equal(actual, expected);
    });

  });

  describe('big takeof', () => {
    it('should return 122.6', () => {
        const actual = calculateTotalPoints(128, 'big', 120, [18.5, 18, 18, 17.5, 18], 0, -5.8)

        const expected = '122.6';

        assert.equal(actual, expected);
    });
  });
  
  describe('mammoth takeof', () => {
    it('should return 208.3', () => {
        const actual = calculateTotalPoints(227.5, 'mammoth', 200, [18, 18.5, 17.5, 18.5, 18.5], 8.7, -8.4);

        const expected = '208.3';

        assert.equal(actual, expected);
    });
  });

});