 // HOISTING 

            // Temporal Dead Zone :- timespan in which variable is declared but not initialised



//sayhi(); // sayhi is not a function 
var sayhi=function(){
    console.log("HI");
}


//
var name="Guru";
//omphoo() // can be used anywhere after declaration  
function omphoo(){
    console.log(name); // using local variable
   var name="bhuvi";
    console.log(name);
}



// Call-Stack 

f1();

function f1(){
    f2();
}
function f2(){
    f3();
}
function f3(){
    console.log("func 3 ");
}


// Event Loop 
    // fifo -> queue


    