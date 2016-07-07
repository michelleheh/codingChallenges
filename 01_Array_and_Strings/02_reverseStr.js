/*
Reverse string
*/

function reverseStr(str) {
  if (str.length < 2) return str;
  return str[str.length - 1] + reverseStr(str.slice(1, -1)) + str[0];
};

module.exports = reverseStr;