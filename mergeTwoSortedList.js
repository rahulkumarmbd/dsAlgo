// Question Link
// https://leetcode.com/problems/merge-two-sorted-lists/

var mergeTwoLists = function(list1, list2) {
    if(list1 == null || list2 == null){
        return list1 || list2;
    }

    const list = {};
    let current = list;
    let prev = null;
    while(list1 != null && list2 != null){
        if(list1.val >= list2.val){
            current.val = list2.val;
            list2 = list2.next;
        }else{
            current.val = list1.val;
            list1 = list1.next;
        }
        prev = current;
        current.next = {};
        current = current.next;
    }
    
    if(list1 == null && list2 == null){
        return list;
    }else if(list1 == null){
        prev.next = list2;
        return list;
    }else{
        prev.next = list1;
        return list;
    }
};

// esay , recursive solution
var mergeTwoLists = function(list1, list2) {
    if(list1 == null || list2 == null){
        return list1 || list2;
    }

    if(list1.val < list2.val){
        list1.next = mergeTwoLists(list1.next,list2);
        return list1;
    }else{
        list2.next = mergeTwoLists(list1,list2.next);
        return list2;
    }
};