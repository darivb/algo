var TreeGenerator = require('./treeGenerator.js');
var Node = require('./node.js');

let rootNode = TreeGenerator.generateTree(49);

function printSlash(board, x, y){

    board[x][y] = "/";
    return board;
}

function printBackSlash(board, x, y){
    console.log('(' + x + ',' + y + ')');
    console.log(board == null);
    console.log("y max: " + board.length);
    board[x][y] = '\\';
    return board;
}

function printNode(board, node, x, y){

    if(node == null){
        return board;
    }
    else{
        board[x][y] = node.getId();
        console.log(board);
        board = printSlash(board, x - 1, y + 1);
        board = printNode(board, node.getLeft(), x - 2, y + 2);
        board = printBackSlash(board, x + 1, y + 1);
        board = printNode(board, node.getLeft(), x + 2, y + 2);
    }
}

function printTree(node){

    let sz = getTreeSize(node) * 2;
    let board = new Array(sz);
    for (let index = 0; index < sz; index++) {
        board[index] = new Array(sz);
    }

    for (let x = 0; x < sz; x++) {
        for (let y = 0; y < sz; y++) {
            board[x][y] = " ";
        }
    }

    board = printNode(board, node, parseInt(sz/2), 0);
    
    for (let x = 0; x < sz; x++) {
        for (let y = 0; y < sz; y++) {
            
                process.stdout.write(board[x][y]);
        }
        process.stdout.write("\n");
    }
}

function getTreeSize(node){

    if(node == null){
        return 0;
    }
    else{
        return 1 + getTreeSize(node.getLeft()) + getTreeSize(node.getRight());
    }
}

function preOrder(node){
    if(node == null){
        return "";
    }
    else{
        let order =  node.getId();
        if (node.getLeft()){
            order = order + ", " + preOrder(node.getLeft());
        }

        if (node.getRight()){
            order = order + ", " + preOrder(node.getRight());
        }
        
        return order;
    }
}

function inOrder(node){
    if(node == null){
        return "";
    }
    else{

        let order = "";

        if (node.getLeft()){
            order = preOrder(node.getLeft());
        }

        order = order + ", " + node.getId();

        if (node.getRight()){
            order = order + ", " + preOrder(node.getRight());
        }
        
        return order;
    }
}

console.log(preOrder(rootNode));
console.log(inOrder(rootNode));