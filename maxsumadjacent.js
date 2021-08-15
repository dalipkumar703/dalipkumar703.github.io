const arr = [1,3,4,5,2,9];

function maxSum(arr, index,prev){
if (index >= arr.length){
return 0;
}
let sum2=0;
let sum1= 0;
sum1 = maxSum(arr, index + 1, prev);
console.log("sum1",sum1)
if (prev + 1!==index ){
	sum2= arr[index] + maxSum(arr,index+1,index);

}
console.log("sum2",sum2)
return Math.max(sum1, sum2);
}

console.log(maxSum(arr, 0));
