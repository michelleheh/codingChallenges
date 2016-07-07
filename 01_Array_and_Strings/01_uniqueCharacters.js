/*
Implement an algorithem to determine if a string has all unique characters.
What if you cannot use additional data structure?
*/

/*
store characters in an arr
Time Complextity: O(n)
Space Complexity: O(n)
*/ 
function uniqueCharacters1(str) {
  let arr = [];
  for ( let i = 0; i < str.length; i++) {
    if ( arr[str[i].charCodeAt()] ) return false;
    arr[str[i].charCodeAt()] = true;
  }
  return true;
};

/*
no additional data structures used
Time Complextity: O(n^2)
Space Complexity: O(1)
*/
function uniqueCharacters2(str) {
  for ( let i = 0; i < str.length; i++) {
    for ( let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) return false;
    }
  }
  return true;
};

/* TODO:
sort characters first, but modifies the original str.

*/
function uniqueCharacters3(str) {
};

module.exports = uniqueCharacters2;