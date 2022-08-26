// question link;
// https://leetcode.com/problems/two-sum/

// Brute Force
var twoSum = function(nums, target) {
    for(let i=0; i<nums.length; i++) {
        for(let j=i+1; j<nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i,j];
            }
        }
    }
};


// optimized approach 
var twoSum = function(nums, target) {
    const obj = {};
    for(let i=0; i<nums.length; i++){
        let a = nums[i];
        let b = target-a;
        if(obj[b] !== undefined){
            return [obj[b],i];
        }else{
            obj[a] = i;
        }
    }
};