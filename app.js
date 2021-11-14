// Maps and Sets question 1
new Set([1, 1, 2, 2, 3, 4]);
// This returns Set [1,2,3,4];

// Question 2
[...new Set('referee')].join('');
// This returns Set['refr];
// correct answer 'ref' I missed the duplicate r

// Question 3
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
// Returns m [1,2,3]

// Actually returns
// Map { (3) […] → true, (3) […] → false }
// size: 2
// <entries>
// 0: Array(3) [ 1, 2, 3 ] → true
// 1: Array(3) [ 1, 2, 3 ] → false
// Creates a nested array

// hasDuplicate
// solution code.
// review with mentor.
const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

hasDuplicate([1, 3, 2, 1]); //true
hasDuplicate([1, 5, 4]); //false

// My attempt
function vowelCount(char) {
  let vowels = 'aeiou';
  let count = 0;
  let myMap = new Map();
  for (let letter of char) {
    if (letter === vowels) {
      myMap.set(letter);
      count++;
      return myMap;
    }
  }
}

// Solution code
// Review with mentor
function isVowel(char) {
  return 'aeiou'.includes(char);
}

function vowelCount(str) {
  const vowelMap = new Map();
  for (let char of str) {
    let lowerCaseChar = char.toLowerCase();
    if (isVowel(lowerCaseChar)) {
      if (vowelMap.has(lowerCaseChar)) {
        vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
      } else {
        vowelMap.set(lowerCaseChar, 1);
      }
    }
  }
  return vowelMap;
}
