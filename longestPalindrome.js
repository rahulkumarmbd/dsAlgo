var longestPalindrome = function(s) {
    let obj = {};
    for(let i=0; i<s.length; i++){
        if(!obj[s[i]]){
            obj[s[i]] = 1;
        }else{
            obj[s[i]] += 1;
        }
    }
    let values = Object.values(obj);
    let skip = false;
    let length = 0;
    for(let i=0; i<values.length; i++){
        if(values[i]%2 === 0){
            length += values[i];
        }else if(!skip){
            length += values[i]; 
            skip = true;
        }else{
            length += values[i]-1;
        }
    }
    return length;
};

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.