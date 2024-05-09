/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    let dp = [];
    for (i = 1 ; i < days[days.length -1 ]; i++){
        dp[i] = 0;
    }
    for( i = 1 ; i < dp.length;i++){
        //if not travelling this day
        if (!days.includes(i)){
            dp[i] = dp[i-1]
        } else{
            dp[i] = Math.min(costs[0]+dp[i-1], costs[1]+dp[Math.max(0,i - 7)], costs[2]+dp[Math.max(0,i - 30)]);
        }
    }
    return dp[dp.length - 1]   
};
