// question link
// https://leetcode.com/problems/reverse-linked-list/

// Brute force
var reverseList = function(head) {
    if(head == null || head.next == null){
        return head;
    }
    
    let prev = null;
    let current = head;
    while(current != null){
       let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
};

// Recursive solution
var reverseList = function(head) {
    if(head == null || head.next == null){
        return head;
    }
    
    const rest = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return rest;
};