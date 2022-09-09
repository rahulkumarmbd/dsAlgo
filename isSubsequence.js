var isSubsequence = function(s, t) {
    let sLeft = 0;
    let tLeft = 0;
    let match = 0;
    
    while(sLeft < s.length && tLeft < t.length){
        if(s[sLeft] === t[tLeft]){
            match++;
            sLeft++;
            tLeft++;
        }else{
          tLeft++;   
        }
    }
    return match === s.length;
};