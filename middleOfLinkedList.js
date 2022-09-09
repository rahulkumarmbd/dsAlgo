var middleNode = function(head) {
    if(head == null){
        return head;
    }
    let slow = head;
    let fast = head;
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};