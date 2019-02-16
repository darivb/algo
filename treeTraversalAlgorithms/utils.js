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
            return 1 + this.getTreeSize(node.getLeft()) + this.getTreeSize(node.getRight());
        }
    }

    static placeNodeOnBoard(node, board, x, y){

        if(node == null){
            return board;
        }
        else{
            board[x][y] = node.getId();
            if(node.getLeft()){
                board[x-1][y+1] = ' /'; 
                board[x-2][y+2] = ' /'; 
                board[x - 3][y+3] = ' /'; 
                board = this.placeNodeOnBoard(node.getLeft(), board, x - 3, y + 4);
            }
         
            if(node.getRight()){
                board[x + 1][y+1] = '\\ '; 
                board[x + 2][y+2] = '\\ '; 
                board[x + 3][y+3] = '\\ '; 
                board = this.placeNodeOnBoard(node.getRight(), board, x + 3, y + 4);
            }
            
            return board;
        }
    }

    static dump(node){
       
        let nodeCount = this.getTreeSize(node);
        let sz = nodeCount * 4 + 1;
        let arr = [];

        for (let index = 0; index < sz; index++) {
            arr.push(new Array(sz));
        }

        for (let x = 0; x < sz; x++) {
            for (let y = 0; y < sz; y++) {
                arr[x][y] = "  ";
            }
        }

        arr = this.placeNodeOnBoard(node, arr, nodeCount*2 +1, 0);

        for (let y = 0; y < sz; y++) {
            for (let x = 0; x < sz; x++) {
                process.stdout.write(arr[x][y]);
            }
            process.stdout.write("\n");
        }
    }
}

module.exports = Utils;