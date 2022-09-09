var getHint = function(secret, guess) {
    let bulls = 0;
    let obj1 = {};
    let obj2 = {};
    for(let i=0; i<secret.length; i++){
        if(secret[i] === guess[i]){
            bulls++;
        }else{
            obj1[guess[i]] = obj1[guess[i]] + 1 || 1;
            obj2[secret[i]] = obj2[secret[i]] + 1 || 1;
        }
    }
    let cows = 0;
    for(let key in obj1){
        if(key in obj2){
            cows += Math.min(obj1[key], obj2[key]);
        }
    }
    
    return `${bulls}A${cows}B`;
};

// Input: secret = "1807", guess = "7810"
// Output: "1A3B"
// Explanation: Bulls are connected with a '|' and cows are underlined:
// "1807"
//   |
// "7810"

// Input: secret = "1123", guess = "0111"
// Output: "1A1B"
// Explanation: Bulls are connected with a '|' and cows are underlined:
// "1123"        "1123"
//   |      or     |
// "0111"        "0111"
// Note that only one of the two unmatched 1s is counted as a cow since the non-bull digits can only be rearranged to allow one 1 to be a bull.