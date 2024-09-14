// elbow -> below
// listen -> silent
//TODO:
// conversation -> voices rant on
// STATE -> taste
const _ = require('lodash');
import { getLetterCount } from './letter-count.js';

export const isAnagram = (string1, string2) => {
  const letterCount1 = getLetterCount(string1);
  const letterCount2 = getLetterCount(string2);
  return _.isEqual(letterCount1, letterCount2);
};
