function SinglyLinkedList(){
    this.head = null;
    this.tail = null;
}
function Node(value,next = null){
    this.value = value;
    this.next = next;
}

SinglyLinkedList.prototype.insert = function(value){
    let node = new Node(value);
    if(!this.head){
        this.head = node;
        this.tail = node;
    }else{
        let pointhead = ths.head;
        this.head = node;
        this.head.next = pointhead
    }
}