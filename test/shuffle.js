/* global describe, it */
import { shuffle } from '../starter/src/shuffle.js';
import { expect } from 'chai';

 describe('shuffle function', () => {
  it('should return a new array with the same elements but in different order', () => {
    const input = [1, 2, 3, 4, 5];
    const output = shuffle(input);

    expect(output).to.have.members(input);
    expect(output).to.not.deep.equal(input);
  });
});
