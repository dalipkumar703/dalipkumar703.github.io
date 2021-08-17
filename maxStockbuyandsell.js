const price =[100, 180, 260, 310,
                    40, 535, 695 ];
                    
 //naive approach        
 function maxStock(price,start, end){
 if(end<=start){
 return 0;
 }
 let maxProfit = 0;
 for (let i = start; i< end; i++){
 for (let j = i+1 ; j <= end; j++){
 if (price[j] > price[i]){
 currentProfit = price[j] - price[i] + maxStock(price, start, i-1) + maxStock(price, j+1, end);
 
 maxProfit = Math.max(maxProfit, currentProfit);
 }
 }
 }
 return maxProfit;
 }               
 console.log(maxStock(price, 0, price.length -1))
/*  function maxProfit( price, start, end)
 {
 
    // If the stocks can't be bought
    if (end <= start)
        return 0;
 
    // Initialise the profit
    let profit = 0;
 
    // The day at which the stock
    // must be bought
    for (let i = start; i < end; i++) {
 
        // The day at which the
        // stock must be sold
        for (let j = i + 1; j <= end; j++) {
 
            // If buying the stock at ith day and
            // selling it at jth day is profitable
            if (price[j] > price[i]) {
 
                // Update the current profit
                let curr_profit = price[j] - price[i]
                                  + maxProfit(price, start, i - 1)
                                  + maxProfit(price, j + 1, end);
 
                // Update the maximum profit so far
                profit = Math.max(profit, curr_profit);
            }
        }
    }
    return profit;
 }
 console.log(maxProfit(price, 0 , price.length-1)) */
