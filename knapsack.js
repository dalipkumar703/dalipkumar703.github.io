let weights = [2, 3, 1, 4 ];
let profits = [4, 5, 3, 7];
let capacity = 5;

//         0 1 2 3 4 5
//0        0 0 0 0 0 0
//4        0 0 1 
//4,5
//4,5,3,7
///bound knapsack with out dp
function maxKnapsack(weights, profits, capacity, currentIndex){
let profit1 = -1
  if (profits.length <=currentIndex || capacity < 0 ){
      return 0;
      }
      if (weights[currentIndex] <= capacity){
      profit1 = profits[currentIndex] + maxKnapsack(weights, profits, capacity - weights[currentIndex], currentIndex + 1);
      }
  
  profit2 = maxKnapsack(weights, profits,capacity,currentIndex + 1 )

return Math.max(profit1, profit2)
}
console.log(maxKnapsack(weights,profits,capacity,0))
