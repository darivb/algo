var Node = require('./node.js');
let usageCount = 0;

class Utils {

    static generateBinaryTree(nodesCount){
        
        if(nodesCount == 0){
            return null;
        }
        else if (nodesCount == 1){
            return this.generateNode();
        }
        else {
            let root = this.generateNode(); 

            root.setLeft(this.generateBinaryTree(parseInt((nodesCount-1) / 2)));
            root.setRight(this.generateBinaryTree((nodesCount - 1) - parseInt((nodesCount-1) / 2)));

            return root;
        }
    }

    static generateNode(){
  
        let id =  parseInt(usageCount/16) + String.fromCharCode("A".charCodeAt(0) + (usageCount % 26));
        usageCount++;

        return new Node(id, null, null);
    }

    static getTreeSize(node){

        if(node == null){
            return 0;
        }
        else{
            return 1 + getTreeSize(node.getLeft()) + getTreeSize(node.getRight());
        }
    }
}

module.exports = Utils;