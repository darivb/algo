class Node {
    constructor(id, left, right) {
      this.id = id;
      this.left = left;
      this.right = right;
    }

    getId(){
        return this.id;
    }

    setLeft(left){
        this.left = left;
    }

    getLeft(){
        return this.left;
    }

    setRight(right){
        this.right = right;
    }

    getRight(){
        return this.right;
    } 
}

module.exports = Node;
