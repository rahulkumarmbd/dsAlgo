let arr = [0,1];
var fib = function(n) {
  if(n === 1 || n === 0){
      return n;
  }
    
  if(arr[n] !== undefined){
      return arr[n];
  }
    
   let value = fib(n-1) + fib(n-2);
   arr[n] = value;
    return value;
  
};