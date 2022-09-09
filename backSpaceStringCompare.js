var backspaceCompare = function(s, t) {
    function backSpace(str){
        let stack = [];
        for(let i=0; i<str.length; i++){
            if(str[i] === '#'){
                stack.pop();
            }else{
                stack.push(str[i]);
            }
        }
        return stack.join("");
    }
    
    return backSpace(s) === backSpace(t);
};

// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".

// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".