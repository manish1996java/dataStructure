function LinkedList(){
    this.head = null;
    this.tail = null;
}

function Node(value,prev,next){
    this.value = value;
    this.prev = prev;
    this.next = next;
}





//insert from head
LinkedList.prototype.insertIntoHead = function(value){
    let node = new Node(value,null,this.head);
    if(this.head) this.head.prev = node;
    else this.tail = node;
    this.head = node;
}






//insert from tail
LinkedList.prototype.insertIntoTail = function(value){
    let node = new Node(value,this.tail,null);
    if(this.tail) this.tail.next = node;
    else this.head = node;
    this.tail = node;
}





//remove from head function
LinkedList.prototype.removeFromHead = function(){
    if(!this.head) return null;
        this.head = this.head.next;
    if(this.head) this.head.prev = null;
    else this.tail = null;
}






//remove form tail function
LinkedList.prototype.removeFromTail = function(){
    if(!this.tail) return null;
        this.tail = this.tail.prev;
    if(this.tail) this.tail.next = null;
    else this.head = null;
}





//search form head function 
LinkedList.prototype.searchFromHead = function(value){
    if(!this.head) return null;
    let currentNode = this.head;
    while(currentNode){
        if(currentNode.value == value){
            return true;
        }else{
            currentNode = currentNode.next;
        }
    }
    return false;
}




//search form tail function
LinkedList.prototype.searchFromTail = function(){
    if(!this.tail) return null;
    let currentNode = this.tail;
    while(currentNode){
        if(currentNode.value == value){
            return true;
        }else{
            currentNode = currentNode.prev;
        }
    }
    return false;
}




// index of function 
LinkedList.prototype.indexOf = function(value){
    let indexes = [];
    let currentNode = this.head;
    let index = 0;
    while(currentNode){
        if(currentNode.value == value){
            indexes.push(index);
        }
        index++;
        currentNode = currentNode.next;
    }
    return indexes;
}