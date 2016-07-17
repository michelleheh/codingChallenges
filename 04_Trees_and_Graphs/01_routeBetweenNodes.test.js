'use strict';

const assert = require('chai').assert;

const Node = require('./Graph').Node;
const Graph = require('./Graph').Graph;
const hasRoute = require('./01_routeBetweenNodes');

describe('Trees and Graphs', function() {
  describe('route between nodes', function() {
    it('should detect a route', function() {
      const graph = new Graph();

      const node1 = new Node('a', ['b', 'c']);
      const node2 = new Node('b', ['c']);
      const node3 = new Node('c', ['d']);
      const node4 = new Node('d');

      graph.add(node1);
      graph.add(node2);
      graph.add(node3);
      graph.add(node4);

      assert.equal(hasRoute(graph, node1, node4), true);

    })

    it('should detect the absence of a route', function() {
      const graph = new Graph();

      const node1 = new Node('a', []);
      const node2 = new Node('b', ['c']);
      const node3 = new Node('c', ['d']);
      const node4 = new Node('d', []);

      graph.add(node1);
      graph.add(node2);
      graph.add(node3);
      graph.add(node4);

      assert.equal(hasRoute(graph, node1, node4), false);
    })
  })
})
