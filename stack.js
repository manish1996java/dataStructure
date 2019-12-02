// using linked list
function Stack(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
}

function Node(value){
    this.value = value;
    this.next = null;
}

Stack.prototype.peek = function(){
    return this.value[this.value.length-1];
}
Stack.prototype.push = function(value){
    let node = new Node(value);
    if(!this.top){
        this.top = node;
        this.bottom = node;
    }else{
        let pointTop = this.top;
        this.top = node;
        this.top.next = pointTop;
    }
    this.length++;
    return this;
}


Stack.prototype.pop = function(){
    if(!this.top) return null;
    if(this.top == this.bottom){
        bottom = null;
    }
    let pointTop = this.top;
    this.top = this.top.next;
    this.length --;
    return pointTop;
}









// using array 

function Stack(){
    this.array = [];
    this.length = 0;
}


Stack.prototype.peek = function(){
    return this.value[this.value.length-1];
}


Stack.prototype.push = function(value){
    this.array.push(value);
    this.length = this.array.length;
    return this;
}


Stack.prototype.pop = function(){
    this.array.pop();
    this.length = this.array.length;
    return this;
}