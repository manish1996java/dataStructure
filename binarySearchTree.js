const BinarySearchTree = function (){
    this.root;
}

const Node = function(value){
    this.value = value;
    this.left = null;
    this.right = null;
}



//insertion in Binary Tree
BinarySearchTree.prototype.insert = function(value){
    const node = new Node(value);
    if(!this.root){
        this.root = node;
    }else{
        let currentNode = this.root;
        while(currentNode){
            if(value > currentNode.value){
                if(!currentNode.right){
                    currentNode.right = node;
                    break;
                }else{
                    currentNode = currentNode.right;
                }
            }else if(value < currentNode.value){
                if(!currentNode.left){
                    currentNode.left = node;
                    break;
                }else{
                    currentNode = currentNode.left;
                }
            }else{
                console.log('try another value');
                break;
            }
        }
    }
}



//lookup in Binary tree
BinarySearchTree.prototype.lookup = function(value){
    if(!this.root) return;
    else if(this.root.value == value){
        return this.root;
    }
    else{
        let currentNode = this.root;
        while(currentNode){
            if(currentNode.value > value){
                currentNode = currentNode.left;
            }else if(currentNode.value < value){
                currentNode = currentNode.right;
            }else if(currentNode.value == value){
                return currentNode;
            }
        }
    }
}

BinarySearchTree.prototype.remove = function(value){
    if(!this.root) return;
        let currentNode = this.root;
        let parent = null;
        while(currentNode){
            if(value > currentNode.value){
                parent = currentNode;
                currentNode = currentNode.right;
            }else if(value < currentNode.value){
                parent = currentNode;
                currentNode = currentNode.left;
            }else if(value == currentNode.value){
                //if no right child
                if(currentNode.right === null){
                    if(parent==null){
                        parent = this.root;
                    }else{
                        if(currentNode.value < parent.left){
                            parent.left = currentNode.left;
                        }else if(currentNode.value > parent.value ){
                            parent.right = currentNode.left;
                        }
                    }
                }
                
            }
        }   
}






// Breadth first search
BinarySearchTree.prototype.bfs = function(){
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode); 

    while(queue.length > 0){
        currentNode = queue.shift();
        list.push(currenNode.value);
        if(currentNode.left){
            queue.push(currentNode.left);
        }
        if(currentNode.right){
            queue.push(currentNode.right);
        }
    }
    return list;
}

BinarySearchTree.prototype.bfs = function(){
    let currentNode = this.root;
    let queue = [];
    let list = [];
    queue.push(currenNode);
    while(currentNode){
        currentNode = queue.shift();
        list.push(currentNode.value);
        if(currentNode.left){
            queue.push(currentNode.left);
        }
        if(currenNode.right){
            queue.push(currentNode.right);
        }
    }
}







//Breadth first search recursive
BinarySearchTree.prototype.bfsr = function(){
    return bfstirversal([this.root],[]);
}

function bfstirversal(queue,list){
    if(!queue.length){
        return list;
    }
    let currentNode = queue.shift();
    if(currentNode.left){
        queue.push(currentNode.left);
    }
    if(currenNode.right){
        queue.push(currentNode.right);
    }

}








// DFS triversal
BinarySearchTree.prototype.inOrder = function(){
    return traverseInOrder(this.root,[]);
}

BinarySearchTree.prototype.preOrder = function(){
    return traversePreOrder(this.root,[]);
}

BinarySearchTree.prototype.postOrder = function(){
    return traversePostOrder(this.root,[]);
}


function traverseInOrder(node, list){
    if(node.left){
        traverseInOrder(node.left,list);
    }
    list.push(node.value);
    if(node.right){
        traverseInOrder(node.right,list);
    }
    return list;
}

function traversePreOrder(node,list){
    list.push(node.value);
    if(node.left){
        traversePreOrder(node.left,list);
    }
    if(node.right){
        traversePreOrder(node.right,list);
    }
    return list;
}
function traversePostOrder(){
    if(node.left){
        traversePreOrder(node.left,list);
    }
    if(node.right){
        traversePreOrder(node.right,list);
    }
    list.push(node.value);
    return list;
}