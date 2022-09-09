var preorder = function(root) {
    if(root === null){
        return [];
    }
    let arr = [];
    let queue = [root];
    
    function outPreorder(root){
        if(root === null) return;
        
        arr.push(root.val);
        
        for(let i=0; i<root.children.length; i++){
            outPreorder(root.children[i]);
        }
    }
    
    outPreorder(root);
    
    return arr;
};