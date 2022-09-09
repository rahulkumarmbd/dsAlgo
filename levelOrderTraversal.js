var levelOrder = function(root) {
    if(!root){
        return [];
    }
    let queue = [root,null];
    let out = [];
    while(queue[0] !== null){
        let level = [];
        while(queue[0] !== null){
            let curr = queue.shift();
            level.push(curr.val);
            if(curr.left !== null){
                queue.push(curr.left);
            }
            if(curr.right !== null){
                queue.push(curr.right);
            }
        }
        out.push(level);
        queue.push(queue.shift());
    }
    return out;
};