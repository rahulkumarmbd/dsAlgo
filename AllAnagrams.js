var findAnagrams = function(s, p) {
    if(p.length > s.length){
        return [];
    }
    let left = 0;
    let right = p.length-1;
    let pObj = {};
    let sObj = {};
    for(let i=left; i<=right; i++){
        pObj[p[i]] = pObj[p[i]] + 1 || 1;
        sObj[s[i]] = sObj[s[i]] + 1 || 1;
    }
    let out = [];
    while(right<s.length){
        let isAnagram = true;
        for(let key in pObj){
            if(pObj[key] !== sObj[key]){
                isAnagram = false;
                break;
            }
        }
        if(isAnagram){
            out.push(left);
        }
        sObj[s[left]]--;
        sObj[s[right+1]] = sObj[s[right+1]] + 1 || 1;
        left++;
        right++;
    }
    return out;
};

// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".

// Input: s = "abab", p = "ab"
// Output: [0,1,2]
// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".