//coin change

let coinsA = [1,2,3];

function coinChangeCount(coins,size, sum){
if (sum < 0){
return 0;
}
if (sum === 0){
return 1;
}
if (size <= 0 && sum > 0){
return 0;
}
return this.coinChangeCount(coins, size, sum-coins[size -1]) + this.coinChangeCount(coins, size-1, sum)
}
console.log(coinChangeCount(coinsA, coinsA.length,4)) 

/* function count(S , m , n )
{
 
    // If n is 0 then there is 1 solution
    // (do not include any coin)
    if (n == 0)
        return 1;
     
    // If n is less than 0 then no
    // solution exists
    if (n < 0)
        return 0;
 
    // If there are no coins and n
    // is greater than 0, then no
    // solution exist
    if (m <=0 && n >= 1)
        return 0;
 
    // count is sum of solutions (i)
    // including S[m-1] (ii) excluding S[m-1]
    return count( S, m - 1, n ) +
           count( S, m, n - S[m - 1] );
}
 
// Driver program to test above function
var arr = [1, 2, 3];
var m = arr.length;
console.log(count(arr, m, 4)) */
