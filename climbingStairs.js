let obj = {}
var climbStairs = function(n) {
    if(n === 0){
        return 1;
    }
    if(n < 0){
        return 0;
    }
    
    if(obj[n] !== undefined){
        return obj[n];
    }
    
    obj[n] =  climbStairs(n-1) + climbStairs(n-2);
    return obj[n];
};