// question link
// https://leetcode.com/problems/isomorphic-strings/

// brute force solution
var isIsomorphic = function(s, t) {
    let trackS = {};
    let trackT = {};
    s = s.split("");
    for(let i=0; i<s.length; i++){
        if(trackS[s[i]] !== undefined && trackT[t[i]] !== undefined){
            s[i] = trackS[s[i]];
        }else if(trackS[s[i]] !== undefined || trackT[t[i]] !== undefined){
                 return false;
        }else{
            trackS[s[i]] = t[i];
            trackT[t[i]] = s[i];
            s[i] = t[i];
        }
    }
    return s.join("") === t;
};


// easy solution 
var isIsomorphic = function(s, t) {
    s = s.split("");
    t = t.split("");
    
    function convertToNumbers(arr){
        let obj = {};
        for(let i=0; i<arr.length; i++){
            if(obj[arr[i]] !== undefined){
                arr[i] = obj[arr[i]];
            }else{
                obj[arr[i]] = i;
                arr[i] = i;
            }
        }
        return arr;
    }
    
    s = convertToNumbers(s);
    t = convertToNumbers(t);
    
    for(let i=0; i<s.length; i++){
        if(s[i] !== t[i]){
            return false;
        }
    }
    return true;
};

console.log(isIsomorphic('foo','bar'));

// optimized
var isIsomorphic = function(s, t) {
    function convertToNumbers(str){
        let obj = {};
        let s = "";
        for(let i=0; i<str.length; i++){
            if(obj[str[i]] !== undefined){
                s += obj[str[i]] + ' ';
            }else{
                obj[str[i]] = i;
                s += i + ' ';
            }
        }
        return s;
    }
    
    s = convertToNumbers(s);
    t = convertToNumbers(t);
    
    return s === t;
};