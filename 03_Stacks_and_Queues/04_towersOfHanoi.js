/*
Classic problem of the Towers of Hanoi, you have 3 towers and N disks of different sizes wich can slicde onto any tower. The puzzle starts with disks sorted in asceending order of size from top to bottom(i.e., each disk sits on top of an even larger one). You have the following constraits:
1. only onde disk can be moved at a time.
2. disk is slid off the top of one tower onton the next tower.
3. A disk can only be placed on top of a larger disk
*/

function moveTower(N, origin, buffer, target) {

};

/*
Provided below is a class of Tower to be used in the main function
*/

const Tower = function(name) {
  this.name = name;
  this.storage = [];
};

Tower.prototype.push = function(item) {
  this.storage.push(item);
};

Tower.prototype.pop = function() {
  return this.storage.pop();
};

module.exports = {
  moveTower,
  Tower
};