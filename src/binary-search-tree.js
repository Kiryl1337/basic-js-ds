const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.listNode = null
  }

  root() {
    return this.listNode;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.listNode === null) {
      this.listNode = newNode;
    } else {
      insertNode(this.listNode, newNode);
    }
    
    function insertNode(node, newNode) {
      if (newNode.data === node.data){
        return node;
      }
      if (newNode.data < node.data) {
        if (node.left === null){
          node.left = newNode
        }
        else{
          insertNode(node.left, newNode)
        } 
      } else {
        if (node.right === null) {
          node.right = newNode
        }
        else{
          insertNode(node.right, newNode)
        }
      }
    }
  }
  

  has(data, node = this.listNode) {
    if (!node){
      return false
    }
    if (node.data === data){
      return true 
    }
    if (data < node.data) {
      return this.has(data, node.left)
    } else return this.has(data, node.right)
  }

  find(data, node = this.listNode) {
    if (!node) {
      return null
    }
    if (node.data === data){
      return node
    }
    if (data < node.data) {
      return this.find(data, node.left)
    } else return this.find(data, node.right)
  }

  remove(data) {
    this.listNode = removeNode(this.listNode, data);

    function removeNode(node, data) {
        if (!node){
          return null
        }
        if (data === node.data) {
          if (!node.left && !node.right){
            return null
          }
          if (!node.left){
            return node.right
          } 
          if (!node.right) return node.left;
          let item = node.right;
          while (item.left) {
            item = item.left;
          }
          node.data = item.data;
          node.right = removeNode(node.right, item.data);
          return node;
        } else if (data < node.data) {
          node.left = removeNode(node.left, data);
          return node;
        } else {
          node.right = removeNode(node.right, data);
          return node;
        }
    }
    
  }
  min() {
    if (!this.listNode) {
      return null;
    }
    let node = this.listNode;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.listNode) {
      return null;
    }
    let node = this.listNode;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}


module.exports = {
  BinarySearchTree
};