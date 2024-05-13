/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let dp =[];
    for(let i =0 ; i < grid.length;i++){
        dp[i] = [];
       for(let j = 0; j < grid[0].length; j++){
            dp[i][j] = 0;
       }
    }
    dp[0][0] = grid[0][0];
    
    
    for (let i = 0 ; i < grid.length; i++){
        for (let j = 0; j < grid[0].length; j++){
            // if (dp[i-1][j]> dp[i][j-1]){
  dp[i][j] = Math.min(grid[i][j] + (i-1 < 0 ? (i ===0 && j===0 ? 0 : dp[0][j-1]): dp[i-1][j]),grid[i][j] + (j-1 < 0 ? (i === 0 && j===0 ?0:dp[i-1][0]): dp[i][j-1])) 
            // }
          
        }
    }
    console.log(dp)
    return dp[grid.length -1][grid[0].length - 1];
};
