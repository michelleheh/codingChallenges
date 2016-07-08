/*
write a function that decodes a str in the following way

input: '0h2abe1iy'
output: 'hey'

what if there are more than single digit numbers?
input: '10eeeeeeeeeeh2abe1iy' 
output: 'hey'
*/

function decode(str) {
  let result = '';
  let i = 0;
  let count = str[0];
  while ( i < str.length ) {
    while ( str[i + 1].charCodeAt(0) >= 48 && str[i + 1].charCodeAt(0) <= 58 ) {
      count += str[i + 1];
      i++;
    }
    result += str[i + parseInt(count) + 1];
    i += parseInt(count) + 2;
    count = str[i]
  }
  return result;
};

module.exports = decode;