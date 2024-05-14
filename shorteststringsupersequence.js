/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
//not working
var shortestCommonSupersequence = function(str1, str2) {
    let dp = new Array(str1.length +1).fill(0);
    for (let i = 0 ; i <=str2.length; i++){
        dp[i] = new Array(str2.length).fill(0);
    }
    dp[0][0] = 0;
    dp[3][0] = 0;
    for (let i = 1; i <=str1.length ; i++){
        for (let j=1 ; j <=str2.length; j++){
            console.log(i,j)
            if (str1[i-1] === str2[j-1]){
                dp[i][j] = 1 + dp[i-1][j-1];
            } else{
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    let row = str1.length;
    let col = str2.length;
    let result = '';
    console.log(dp)
    while(row > 0 && col > 0){
        if (str1[row-1] === str2[col -1]){
            result+= str2[row-1];
            row--;
            col--;
        }
        if(dp[row-1][col]> dp[row][col-1]){
            result+= str1[row-1];
            row--;
        }else{
            result+= str1[col-1];
            col--;
        }


    }
    while(row>0){
        result+=str1[row-1];
        row--;
    }
    while (col>0){
        result+=str2[col-1];
        col--;
    }
    console.log(result)

};
