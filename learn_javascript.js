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


//19 march
// inheritance example
function Employee() {
    this.name = '';
    this.dept = 'general';
}

function Manager() {
  Employee.call(this);
  this.reports = [];
}
undefined
let aman = new Manager();
aman
Manager {name: "", dept: "general", reports: Array(0)}name: ""dept: "general"reports: []__proto__: Objectconstructor: ƒ Manager()length: 0name: "Manager"arguments: nullcaller: nullprototype: {constructor: ƒ}__proto__: ƒ ()[[FunctionLocation]]: VM2846:6[[Scopes]]: Scopes[2]0: Script {aman: Manager}aman: Manager {name: "", dept: "general", reports: Array(0)}1: Global {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}__proto__: Object
Manager
ƒ Manager() {
  Employee.call(this);
  this.reports = [];
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

ƒ Manager() {
  Employee.call(this);
  this.reports = [];
}
Manager
ƒ Manager() {
  Employee.call(this);
  this.reports = [];
}
function WorkerBee() {
  Employee.call(this);
  this.projects = [];
}
undefined
WorkerBee
ƒ WorkerBee() {
  Employee.call(this);
  this.projects = [];
}
WorkerBee.prototype
{constructor: ƒ}constructor: ƒ WorkerBee()length: 0name: "WorkerBee"arguments: nullcaller: nullprototype: {constructor: ƒ}constructor: ƒ WorkerBee()__proto__: Object__proto__: ƒ ()[[FunctionLocation]]: VM2992:1[[Scopes]]: Scopes[2]__proto__: Object
Object.getPrototypeOf(WorkerBee)
ƒ () { [native code] }
Object.getPrototypeOf(WorkerBee).constructor
ƒ Function() { [native code] }
WorkerBee.prototype = Object.create(Employee.prototype);
WorkerBee.prototype.constructor = WorkerBee;
ƒ WorkerBee() {
  Employee.call(this);
  this.projects = [];
}
WorkerBee
ƒ WorkerBee() {
  Employee.call(this);
  this.projects = [];
}
Object.getPrototypeOf(WorkerBee)
ƒ () { [native code] }
WorkerBee.prototype
Employee {constructor: ƒ}constructor: ƒ WorkerBee()length: 0name: "WorkerBee"arguments: nullcaller: nullprototype: Employee {constructor: ƒ}__proto__: ƒ ()[[FunctionLocation]]: VM2992:1[[Scopes]]: Scopes[2]__proto__: Object
