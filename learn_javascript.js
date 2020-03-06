function getR(){
    return Promise.all([Promise.resolve(true),Promise.reject(true)]).then(()=>{
    const a = 3;
return a}).catch((error)=>{
    const err = error;
    return err;

})
}
function callGetR(){
    getR().then((res)=>{console.log(res)}).catch((error)=>{console.log(error)})
    console.log(5);
}
callGetR()

//Output
//5
// true

function learnReCatch(){
    try { 
    if(1 !==2){
    throw "1 not equal to 2";
} }catch(error){
    return error;
}
}
function catchError(){
try {
learnReCatch();
}
catch(error){
console.log(error);
}

}
catchError();
//Output
//undefined

function learnReCatch(){
    try { 
    if(1 !==2){
    throw "1 not equal to 2";
} }catch(error){
    throw error;
}
}
function catchError(){
try {
learnReCatch();
}
catch(error){
console.log(error);
}

}
catchError();
//Output
// 1 not equal to 2
