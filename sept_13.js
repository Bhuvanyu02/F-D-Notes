// FUNCTION CALL-BACK  -> function as a parameter of another function

let obj= [{name:"Guru",age:28},{name:"B",age:25}];
function newn(){
    setTimeout(function(){
        obj.push({name:"YO",age:40});
    },2000);
}
function print_name(){
   newn();
    setTimeout(()=>{
  obj.forEach((data)=>{console.log(data.name)})
  console.log(obj); 
},3000)
}

print_name();
console.log(obj);

