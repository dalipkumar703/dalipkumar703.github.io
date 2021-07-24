

function Node (data){
	this.data = data;
  this.left = null;
  this.right = null;
}
class BTree {
constructor(data){
this.root = new Node(data);
}
insertInBtree(currentNode, newValue){
if (currentNode === null){
currentNode = new Node(newValue);
} else if (currentNode.data < newValue){
currentNode.right = this.insertInBtree(currentNode.right, newValue)
} else if (currentNode.data > newValue){
currentNode.left = this.insertInBtree(currentNode.left, newValue);
}
return currentNode;
}

}

function traverseBFS(root){
let queue = root;
let result = [];
while (queue.length){

}
}
btree= new BTree(5);
btree.insertInBtree(btree.root,10);
btree.insertInBtree(btree.root,11);
btree.insertInBtree(btree.root,6);
btree.insertInBtree(btree.root,4);
btree.insertInBtree(btree.root,15);
console.log(btree.root.left)


/* var test = new Node(10)
console.log(test.data)
console.log(window.data)
this.dtest = new Node(10)
console.log(this.dtest.data) */
