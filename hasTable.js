const HashTable = function(value){
    this.buckets = Array(value);
    this.bucketlength = this.buckets.length;
}




const Node = function(key,value,next = null){
    this.key = key;
    this.value = value;
    this.next = next;
}







HashTable.prototype._hash = function(key){
    let total = 0;
    for(let i=0;i<key.length;i++){
        total += key.charCodeAt(i); 
    }
    return total%this.bucketlength;
}









HashTable.prototype.set = function(key,value){
    let hash = this._hash(key);
    let node = new Node(key,value);
    if(!this.buckets[hash]){
        this.buckets[hash] = node;
    }else if(this.buckets[hash].key === key){
        this.buckets[hash].value = value;
    }
    else{
        let currentNode = this.buckets[hash];
        while(currentNode.next){
            if(currentNode.next.key === key){
                currentNode.next.value = value;
            }
            currentNode = currentNode.next;
        }
        currentNode.next = node;
    }
    return this;
}






HashTable.prototype.get = function(key){
    let hash = this._hash(key);
    if(!this.buckets[hash]){
        return;
    }
    else{
        let currentNode = this.buckets[hash];
        while(currentNode){
            if(currentNode.key === key){
                return currentNode.value;
            }else {
              currentNode = currentNode.next;
            }
        }
        return;
    }
}