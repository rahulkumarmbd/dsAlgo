var decodeString = function(s) {
    let out = '';
    let n = '';
    let stack = [];
    let str = '';
    for(let i=0; i<s.length; i++){
        if(Number(s[i]) == s[i] && stack.length === 0){
            n += s[i];
        }else if(s[i] === '['){
            if(stack.length !== 0){
                str += s[i];
            }
            stack.push(s[i]);
        }else if(s[i] === ']'){
            stack.pop();
            if(stack.length !== 0){
                str += s[i];
            }
        }else if(stack.length !== 0){
            str += s[i];
        }else{
            out += s[i];
        }
        
        if(stack.length === 0 && n !== 0 && str.length !== 0){
            let decodedStr = decodeString(str);
            for(let j=0; j<Number(n); j++){
                out += decodedStr;
            }
            n = 0;
            str = '';
        }
    }
    return out;
};

console.log(decodeString("100[leetcode]"));