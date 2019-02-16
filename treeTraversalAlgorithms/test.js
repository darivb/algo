var Utils = require('./utils.js');
var Node = require('./node.js');
var assert = require('assert');

function preOrder(node, array){

    if(node == null){
        return [];
    }
    else {

        array.push(node.getId());
        array.concat(preOrder(node.getLeft(), array));
        array.concat(preOrder(node.getRight(), array));

        return array;
    }
}

function inOrder(node, array){

    if(node == null){
        return [];
    } 
    else {

        array.concat(inOrder(node.getLeft(), array));
        array.push(node.getId());
        array.concat(inOrder(node.getRight(), array));

        return array;
    }
}

describe('PreOrder', function() {
    it('Pre ordered array length should be equal to binary tree node count.', function() {
        let nodeCount = 8;
        let rootNode = Utils.generateBinaryTree(nodeCount);
        let preOrdered = preOrder(rootNode, []);

        console.log(preOrdered);
        assert.equal(nodeCount, preOrdered.length);
    });
});

describe('InOrder', function() {
    it('InOrdered array length should be equal to binary tree node count.', function() {
        let nodeCount = 8;
        let rootNode = Utils.generateBinaryTree(nodeCount);
        let inOrdered = inOrder(rootNode, []);
        console.log(inOrdered);
        assert.equal(nodeCount, inOrdered.length);
    });
});