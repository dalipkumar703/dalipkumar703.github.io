let sortA = [8,7,6,1,0,9,2];

/* function swap (sort, index, i){
let temp = sort[index];
sort[index] = sort[i];
sort[i] = temp;
}
 */
 function partition(sort, a,b){
let pivot = sort[b];
let index = a;
for (i = a ; i < b ; i++){
 if (sort[i]< pivot){
let temp = sort[index];
sort[index] = sort[i];
sort[i] = temp;
 index++;
 }
}
let temp = sort[index];
sort[index] = sort[b];
sort[b] = temp;
console.log("index",index)
return index;
}
function quickSort(sort, a,b){
if (a > b){
return;
}
let pivot = partition(sort, a,b);
console.log(pivot);
quickSort(sort, a, pivot - 1);
quickSort(sort, pivot + 1, b);


}
quickSort(sortA, 0, sortA.length -1)
console.log(sortA)
