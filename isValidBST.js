var isValidBST = function(root) {
    let key = -Infinity;
    function checkBST(root){
        if(root === null){
            return true;
        }

        let out1 = checkBST(root.left);
        if(key < root.val){
            key = root.val;
        }else{
            return false;
        }
        let out2 = out1 && checkBST(root.right);
        return out1 && out2;
    }
    return checkBST(root);
};