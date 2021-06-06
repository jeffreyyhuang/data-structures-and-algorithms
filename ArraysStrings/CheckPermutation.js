/*
Question 1.2
Given two strings, write a method to decide if one is a permutation of the other.
*/

let checkPermutation = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let str1_tracker = {};
  let str2_tracker = {};

  for (let i = 0; i < str1.length; i++) {
    if (!str1_tracker[str1[i]]) {
      str1_tracker[str1[i]] = 1;
    } else {
      str1_tracker[str1[i]]++;
    }

    if (!str2_tracker[str2[i]]) {
      str2_tracker[str2[i]] = 1;
    } else {
      str2_tracker[str2[i]]++;
    }
  }

  for (let key in str1_tracker) {
    if (str1_tracker[key] !== str2_tracker[key]) {
      return false;
    }
  }

  return true;
}

/*
Test 1:
let str1 = 'abcde'
let str2 = 'bcde'
should return false

Test 2:
let str1 = 'abcde'
let str2 = 'bcdef'
should return false

Test 3:
str1 = 'aabbccddee'
str2 = 'abcdeabcde'
shoudl return true
*/