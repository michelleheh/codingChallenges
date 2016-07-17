/* 
  Represents a graph as an adjacency list

  NOTE: Unlike a tree, you won't always be able to
  reach all nodes in a graph from a single node.

*/

'use strict';

function Graph() {
  this.nodes = {};
}

function Node(value, children) {
  this.value = value || '';
  this.children = children || [];
}

Graph.prototype.add = function(node) {
  this.nodes[node.value] = node;
}

module.exports = {
  Node: Node,
  Graph: Graph
};
