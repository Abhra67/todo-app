let todo=[];
let req=prompt("please enter your request:");
console.log(req);
while(true){
 if(req=="quit"){
    console.log("quitting app");
    break;
 }
 if(req=="list"){
    console.log("---------------------------------");
    for(let i=0;i<todo.length;i++){
         console.log(i,todo[i]);
     }
    console.log("---------------------------------");

 }
if(req=="add"){
    let task=prompt("enter the task");
   todo.push(task);
   console.log("TASK ADDED");

 }
 if(req=="delete"){
    let indx=prompt("enter the task index");
   todo.splice(indx,1);
   console.log("TASK removed");

 }

req=prompt("please enter your request:");

}