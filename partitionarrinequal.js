function canPartition(arr){
	const sum = arr.reduce((tot,acc)=>tot+acc,0);
  if (sum % 2 !== 0){
  return -1;
  }
  const target = sum/2;
  const dp = Array.from({ length: arr.length + 1 }, () => Array(target + 1).fill(false));
  for (let i = 0 ; i <= arr.length; i++){
  dp[i][0] = true;
  }
 
 for (let i =1 ; i <= arr.length; i++){
 		for (let j = 1 ; j <= target;j++){
     if (arr[i-1] <= target){
     dp[i][j] =  dp[i-1][j] || dp[i - 1][j - arr[i-1]];
     }else {
     dp[i][j] = dp[i-1][j];
     }
    }
 }
 console.log(dp)
 return dp[arr.length][target]
 
}
const arr = [1, 5, 11, 5];
console.log(canPartition(arr))
