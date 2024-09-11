import { expect } from 'chai';
import { getLetterCount } from './letter-count.js';

describe('getLetterCount - basic functionality', () => {
  it('returns an empty obejct when passed an empty string', () => {
    const expected = {};
    const actual = getLetterCount('');
    expect(actual).to.deep.equal(expected);
  });
});
