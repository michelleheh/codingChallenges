/*
Perform basic string compression
 input: 'aabcccccaaa'
 output: 'a2b1c5a3'

*/

function stringCompression(str) {
  let result = '';
  let previous = str[0];
  let count = 1;

  for ( let i = 1; i <= str.length; i++ ) {
    if ( str[i] !== previous ) {
      result = result + previous + count;
      previous = str[i];
      count = 1;
    } else {
      count++;
    }
  }
  return ( result.length < str.length ) ? result : str;
}

module.exports = stringCompression;