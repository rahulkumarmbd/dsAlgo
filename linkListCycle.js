var detectCycle = function(head) {
    if(!head){
        return head;
    }
    let slow = head;
    let fast = head;
    while(fast && fast.next){
        slow = slow.next; 
        fast = fast.next.next;
        if(slow === fast){
            break;
        }
    }
    if(!fast || !fast.next){
        return null;
    }
    
    slow = head;
    while(fast !== slow){
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
};