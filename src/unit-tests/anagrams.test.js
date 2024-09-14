import { expect } from 'chai';
import { isAnagram } from './anagrams.js';

describe('isAnagram - basic functionality', () => {
  it('returns false when passed either string is empty', () => {
    const expected = false;
    const actual = isAnagram('', 'test');
    expect(actual).to.equal(expected);
  });
  it('returns true when two known anagrams are passed in', () => {
    const expected = true;
    const actual = isAnagram('elbow', 'below');
    expect(actual).to.equal(expected);
  });
});
