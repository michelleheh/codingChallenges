/*
Given two strings, write a method to decide if one is a permutation of the other
*/

function isPermutation(str1, str2) {
  if ( str1.length !== str2.length ) return false;
  let str1hash = {};

  for ( let i = 0; i < str1.length; i++ ) {
    str1hash[str1[i]] = str1hash[str1[i]] + 1 || 1;
  }

  for ( let i = 0; i < str2.length; i++ ) {
    if ( !str1hash[str2[i]] ) {
      return false;
    } else {
      str1hash[str2[i]]--;
    }
  }
  return true;
};

module.exports = isPermutation;