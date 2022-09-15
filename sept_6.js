
//  Q1
// var n=Number(prompt("Enter total elements in Array"));
// var arr=new Array;
// var sum=0;
// var product=1;
// for(var i=0;i<n;i++){
//     var ans=Number(prompt("Enter element"));
//     arr[i]=ans;
//     sum+=ans;
//     product*=ans;
// }
// console.log("The Sum of all the elements of Array is "+sum);
// console.log("The Product of all the elements of Array is "+product);



    //  Q3  

    // var s=String(prompt("Enter String"))
    // var l=s.length;
    // var a="";
    // for(var i=0;i<l;i++){
    //     if(s[i]==s[i].toLowerCase()){
    //       a+=s[i].toUpperCase();
    //     }
    //     else{
    //         a+=s[i].toLowerCase();
    //     }
    // }
    // console.log(a);
    

//Q4
// var arr = [];
// console.log("Empty Array" + arr);

// var n = Number(prompt("Enter number of elements"));
// for (var i = 0; i < n; i++) {
//   var ans = prompt("Enter Element");
//   arr[i] = ans;
// }
// console.log("Array after inserting elements : " + arr);


// // Q5


var n =Number(prompt("Enter Total Number of elements "));
var arr1=new Array;
for(var i=0;i<n;i++){
    var s=String(prompt("Enter Element"));
    arr1[i]=s;
}
var c=1;
var max=0;
var d;
for(var i=0;i<arr1.length;i++){
    c=1;
  for(var j=0;j<arr1.length;j++){
      if(i==j){
          continue;
      }
      if(arr1[i]==arr1[j]){
          c++;
      }
  }
  if(c>max){
      max=c;
      d=arr1[i];
  }
}
console.log(d + " ( "+max +" times" + " ) ");



// Q6
// var n = Number(prompt("Enter Number of Elements"));
// var arr=new Array;
// var s1="";
// var s2="";
// var s3="";
// for(var i=0;i<n;i++){
//     var ans=String(prompt("Enter Element"));
//     arr[i]=ans;
//     if(i==n-1){
//         s1+=ans;
//         s2+=ans;
//         s3+=ans;    
//     }
//     else{
//         s1+=ans+" ";
//         s2+=ans+",";
//         s3+=ans+"+";
//     }
// }
// console.log(s1);
// console.log(s2);
// console.log(s3);

// Q7
// var s1=Number(prompt("Enter side 1"));
// var s2=Number(prompt("Enter side 2"));
// var s3=Number(prompt("Enter side 3"));
// if(s1==s2==s3){
//     console.log("Triangle is Equilateral");
// }
// else if(s1==s2 || s2==s3 || s1==s3){
//     console.log("Triangle is Isoceles");
// }
// else{
//     console.log("Triangle is Scalene");
// }


//Q9

// var num1=Number(prompt("Enter First Number"));
// var num2=Number(prompt("Enter Second Number"));
// if(num1>num2){
//     console.log("Number 1 is Greater");
// }
// else if(num2>num1){
//     console.log("Number 2 is Greater");
// }
// else{
//     console.log("Both Numbers are Equal")
// }



// Q14

// function last(arr,n){
//     if(n==null){
//         return(arr[(arr.length)-1]);
//     }
//     else{
//         var num=arr.length;
//         if(n>num){
//             return(arr);
//         }
//         else{
//             var count=1;
//             var num=arr.length;
//             var s="";
//             for(var i=num-1;i>=0;i--){
//                 if(count<=n){
//                     s+=arr[i]+" ";
//                     count++;
//                 }
//             }
//             return (s);
//         }
//     }

// }