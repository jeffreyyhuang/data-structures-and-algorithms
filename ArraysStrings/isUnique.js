/*
Question 1.1
Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
*/

let isUnique = (str) => {
  let tracker = {};

  for (let i = 0; i < str.length; i++) {
    if (!tracker[str[i]]) {
      tracker[str[i]] = 1;
    } else {
      return false;
    }
  }

  return true;  
}

/*
Test 1:
let str1 = 'hello';
should return false

Test 2:
let str2 = 'abc';
should return true
*/