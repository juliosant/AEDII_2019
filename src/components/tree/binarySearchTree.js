import Node from './node'

export default class BinarySearchTree {
    constructor() {
        this.root = null
    }

    hasleftChild(node){
        return node.leftChild !== null
    }

    add(key) {
        if (this.root == null) {
            this.root = new Node(key)
        } else {
            this.addNode(this.root, key)
        }
    }

    addNode(node, key) {
        if (key <= node.key){
            if (node.leftChild == null) {
                node.leftChild = new Node(key, node)
            } else {
                this.addNode(node.leftChild, key)
            }
        } else {
            if (node.rightChild == null) {
                node.rightChild = new Node(key, node)
            } else {
                this.addNode(node.rightChild, key)
            }
        }
    }

    search(key){
       return this.searchNode(this.root, key)
    }   


    searchNode(node, key){
        if (node == null){ 
            return null
        }
        if(key === node.key){
            return node
        } 
        if(key < node.key){
            return this.searchNode(node.leftChild, key)
        }
        return this.searchNode(node.rightChild, key)
    }  
}