
function Node(val)
{
this.val=val;
this.left=null;
this.right=null;
}
function BinarySearchTree()
{
    this.root=null;
}
BinarySearchTree.prototype.push=function(val)
{
    if(!this.root)
     {
         this.root=new Node(val);
         return;
     }
     currentNode=this.root;
     newNode=new Node(val);
     while(currentNode)
     {
         if(val>=currentNode.val)
         {
             if(!currentNode.right)
               {
                   currentNode.right=newNode;
                   break;
               }
               else
               {
                   currentNode=currentNode.right;
               }
             
         }
         else
         {
             if(!currentNode.left)
             {
                 currentNode.left=newNode;
                 break;
             }
             else
             {
                 currentNode=currentNode.left;
             }
             
         }
     }
    console.log(this.root);
}
BST=new BinarySearchTree();
BST.push(5);
BST.push(3);
BST.push(2);
BST.push(10);
console.log("BST",BST.root);
