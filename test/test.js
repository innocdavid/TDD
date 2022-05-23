// importing the required modules
// to perform tests

const assert  = require('chai').assert;
const multiply = require('../multiply');

// test functions
describe('running tests', () => {
  it('first cycle of test', () => {
    assert.equal(multiply(1, 1), 1);
  });

  it('second cycle of test', () => {
    assert.equal(multiply(2, 2), 4);
  });

  it('third cycle of test', () => {
    assert.equal(multiply(3, 3), 9);
  });

  it('fourth cycle of test', () => {
    assert.equal(multiply(4, 4), 16);
  });

  it('fifth cycle of test', () => {
    assert.equal(multiply(23, 45), 23 * 45);
  });
});
