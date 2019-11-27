/*
  Write JavaScript/React code here and press Ctrl+Enter to execute.

  Try: mountNode.innerHTML = 'Hello World!';
   Or: ReactDOM.render(<h2>Hello React!</h2>, mountNode);
*/
let tp;
 function switchRoom(i){

  for(let i=0; i<99999;i++){
    
  }
  console.log(`Switch Room ${i}`);
}
 function validateActivityItems(i){
  return new Promise( (resolve)=>{
    setTimeout(function(){
      console.log(`yep ${i}`);
      resolve();
    }, 7000)
  })
}
 for (let i = 0, p = Promise.resolve(); i<5; i++){
p = p.then((value) =>{
  switchRoom(i);
  tp = Date.now();
  return validateActivityItems(i);
  }).then((value)=>{
  	console.log(`${i} value ${Date.now() - tp}`);
  });

}
 
/* [0,1,2,3,4].forEach(async(i)=>{
let p = Date.now();
switchRoom(i);
validateActivityItems(); 
c onsole.log(Date.now() - p)
}) */

/* output
Switch Room 0 _display:44:3
yep 0 _display:49:7
0 value 7001 _display:60:4
Switch Room 1 _display:44:3
yep 1 _display:49:7
1 value 7003 _display:60:4
Switch Room 2 _display:44:3
yep 2 _display:49:7
2 value 7003 _display:60:4
Switch Room 3 _display:44:3
yep 3 _display:49:7
3 value 7010 _display:60:4
Switch Room 4 _display:44:3
yep 4 _display:49:7
4 value 7002
*/
