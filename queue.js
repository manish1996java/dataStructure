// Queuey Using Linked List

const Queue = function(){
    this.first;
    this.last;
    this.length = 0;
}

const Node = function(value){
    this.value = value;
    this.next = null;
}

// peek funciton 
Queue.prototype.peek = function(){
    return this.first;
}

// enqueue funciton 
Queue.prototype.enqueue = function(value){
    let node = new Node(value);
    if(!this.first){
        this.first = node;
        this.last = node;
    }else{
        this.last.next = node;
        this.last = node;
    }
    this.length++;
    return this;
}

// dequeue funciton 
Queue.prototype.dequeue = function(){
    if(!this.first)  return null;
    if(this.first === this.last){
        this.last = null;
    }
    let pointFirst = this.first;
    this.first = this.first.next;
    this.length--;
    return pointFirst;
}






// Queue using array

const QueueA = function(){
    this.data = [];
    this.length = 0;
}

QueueA.prototype.peek = function(){
    return this.data[this.data.length - 1];
}

QueueA.prototype.enqueue = function(value){
    this.data.push(node);
    this.length = this.data.length;
    return this.data;
}

QueueA.prototype.dequeue = function(){
    this.data.shift();   
    this.length = this.data.length;
    return this.data;
}