
async function waitHello(){
   return new Promise( function (resolve,reject){
   setTimeout( resolve(1),1000);
   
  
});
  
}

async function waitHello1(){
   return new Promise( function (resolve,reject){
   setTimeout(resolve(2),3000);
   return 3;
  
});
}
(async () => {
	let result = await waitHello() + await waitHello1();
	console.log(result);
})();
  

function second(){
  console.log("bye");
}


 

second();
