var characterReplacement = function(s, k) {
    let left = 0;
    let countChars = {}
    let max = 0;
    let out = 0;
    for(let right = 0; right<s.length; right++){
        countChars[s[right]] = countChars[s[right]] + 1 || 1;
        max = Math.max(max,countChars[s[right]]);
        
        while(right-left+1-max > k){
            countChars[s[left]]--;
            left++;
        }
        out = Math.max(out,right-left+1);
    }
    return out;
};

console.log(characterReplacement("AABABBA",1))