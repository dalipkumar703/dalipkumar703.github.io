function maxBrainer(arr){
let dp = new Array(arr.length+ 1).fill(0);
let n = arr.length;
dp[n - 1] = arr[n - 1][0]
for (let i = n - 2; i >= 0; i--){
let take = arr[i][0] + (i + arr[i][1]+ 1 < n ? dp[i + arr[i][1] + 1]: 0)
let not_take = dp[i + 1];
dp[i] = Math.max(take,not_take)
}
console.log(dp)
return dp[arr.length - 1]

}
console.log(maxBrainer([[3,2],[4,3],[4,4],[2,5]]))
