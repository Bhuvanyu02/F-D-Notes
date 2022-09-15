// var array = [2, 4, 6, 7, 8, 10];
// var myArr= array.filter(v => v / 2 === 0);

// console.log(myArr);



var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
// var c=0;
// for(let x in student){
//     c++;
// }
// console.log(c);


var Circle={
    r,
    pi:(22/7)

}
Circle.r=Number(prompt("Enter Radius"));
var area=Circle.pi*Circle.r*Circle.r;
var p=2*Circle.pi*Circle.r;
console.log("Area is "+ area);

// var str=String(prompt("Enter the string"));
// var str2=[];
// for(var i=0;i<str.length;i++){
//         for(var j=i+1;j<=str.length;j++){
//                 str2.push(str.substring(i,j))
//         }
// }
// console.log(str2)

var Cylinder={
    r:2,
    h:2,
    pi:(22/7)
}
var V=Cylinder.pi*Cylinder.r*Cylinder.r*Cylinder.h
//console.log(V.toFixed(4))



var s=String(prompt("Enter String"));
var vowels=['a','e','i','o','u'];
var c=0;
for(var l of s.toLowerCase()){
    if(vowels.includes(l)){
        c++;
    }
}
console.log("Number of vowels are "+c);
console.log("Number of consonants are "+ (s.length-c));