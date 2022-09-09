var uniquePaths = function(m, n) {
    let mat = [];
    for(let i=0; i<=m; i++){
        let row = [];
        for(let j=0; j<=n; j++){
            row.push(0);
        }
        mat.push(row);
    }
    
    for(let i=m-1; i>=0; i--){
        for(let j=n-1; j>=0; j--){
          if(j==n-1 && i==m-1){
                mat[i][j] = 1;
          }else{
              mat[i][j] = mat[i][j+1] + mat[i+1][j];
          }
        }
    }  
    return mat[0][0];
};

//easy 
let obj = {};
var uniquePaths = function(m, n) {
    if(m === 1 && n === 1){
        return 1;
    }
    
    if(m < 1 || n < 1){
        return 0;
    }
    let temp = `${m} ${n}`;
    if(temp in obj){
        return obj[temp];
    }else{
        obj[temp] = uniquePaths(m-1,n) + uniquePaths(m,n-1);  
        return obj[temp];
    }
};

// Input: m = 3, n = 2
// Output: 3
// Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down