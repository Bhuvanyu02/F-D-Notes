// for(var i=1;i<=100;i++){
//     if(i%3==0 && i%5==0){
//         console.log("FizzBuzz");
//     }
//     else if(i%3==0){
//         console.log("Fizz");
//     }
//     else if(i%5==0){
//         console.log("Buzz");
//     }
//     else{
//         console.log(i);
//     }
// }

// var n=5;
// for(var i=0;i<=n;i++){
//     var s="";
//     for(var j=0;j<i;j++){
//         s+="*";
//     }
// //    console.log(s);    
// }


// var sum=0;
// for(var i=1;i<=1000;i++){
//     if(i%3==0 || i%5==0){
//         sum+=i;
//     }
// }
// console.log(sum);


// Q13
// var a=Number(prompt("Enter Number 1"));
// var b=Number(prompt("Enter Number 2"));
// for(var i=a;i<=b;i++){
//     let check=0;
//     for(var j=2;j<=i/2;j++){
//         if(i%j==0){
//             check=1;
//             break;
//         }
//     }
//     if(check==0){
//         console.log(i);
//     }
// }


//  Q14
// var a=Number(prompt("Enter Number 1"));
// var b=Number(prompt("Enter Number 2"));
// if(a%10==b%10){
//     console.log("Same Last Digit");
// }
// else{
//     console.log("NOT SAME LAST DIGIT");
// }



//  Q15
var n=Number(prompt("Enter Number"));
function sq(n){
    var square=0;
    while(n>0){
        var d=n%10;
        square+=d*d;
        n=Math.floor(n/10);
    }
    return square;
}
function check (n){
    var arr=[];
    arr.push(n);
    while(true){
        if(n==1){
            return true;
        }
        n=sq(n);
        if(arr.includes[n]){
            return false;
        }
        arr.push(n);
    }
    return false;
}
if(check(n)){
    console.log("Yes");
}
else{
    console.log("No");
}

//  Q16
// var a=Number(prompt("Enter Number 1"));
// var b=Number(prompt("Enter Number 2"));
// var c=Number(prompt("Enter Number 3"));
// var count=0;
// if(a<0){
//     count++;
// }
// if(b<0){
//     count++;
// }
// if(c<0){
//     count++;
// }
// if(count==2){
//     alert("The sign is -");
// }
// else{
//     alert("The sign is +");
// }


// Q17
// var a=Number(prompt("Enter Number"));
// if(a<0){
//     console.log("NUMBER IS LESS THAN 0")
// }
// else if(a>=0 && a<=50){
//     console.log("Number Lies between 0 and 50");
// }
// else if(a>=51 && a<=100){
//     console.log("Number Lies between 51 and 100");
// }
// else{
//     console.log("Number is greater than 100");
// }

