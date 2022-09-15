// //Q7
// function ommphoo(arr, size)
//     {
//         var max=0;
//         var sum=0;
//         for(var i=0;i<size;i++){
//                 sum+=arr[i];
//                 if(max<sum){
//                     max=sum;
//                 }
//         }
//         return max;
//     }
//     var a = [1,2,3,-4,45];
//     var value=ommphoo(a,a.length);
//     console.log("Maximum Sum is ",value)





// //q8
// const numbers = [1, 2, 3, 2, 4, 5, 5, 6];
// const set = new Set(numbers);
// const duplicates = numbers.filter(item => {
//     if (set.has(item)) {
//         set.delete(item);
//     } else {
//         return item;
//     }
// });

// console.log(duplicates);


//Q9
// var s=String(prompt("Enter Number"));
// var s1="";
// var s2="";
// var i=0;
//     while(s[i]!='.'){
//         s1+=s[i];i++;
//     }
//     s1=parseInt(s1);
//     i++;
//     for(i;i<s.length;i++){
//         s2+=s[i];
//     }
//     s2=parseInt(s2);
//     var ans;
//     if(s1>s2){
//         ans=s1;
//     }
//     else{
//         ans=s2;
//     }
//     console.log(ans);


//Q10
// const arr=[1,2,3,-3,4,-3,4,1]
// var n=5;
// for(var i=0; i<arr.length; i++){
//     if(arr[i]+arr[i+1]==n){
//         console.log(arr[i], arr[i+1]);
//     }
// }

//Q11
// const numbers = [1, -2, 3, 2, -4, -5, 5, 6];
// numbers.sort();
// console.log(numbers);



// // Q12
// const arr=[2,6,34,3,8,4,5,6,4,2];
// const arr2=[];
// var a2=0;
// arr.sort();
// var ans=0;
// for(var i=0;i<arr.length-1;i++){
//     if(arr[i]==arr[i+1]){
//         arr2[a2]=arr[i];
//         a2++;
//     }
// }
// console.log(arr2);



// // Q13
//  var n=Number(prompt("enter a no"));
//     let f1 = 1, f2 = 1;
 
//     if (n < 1)
//         return;
//     for (i = 1; i < n-1; i++) {
//         let next = f1 + f2;
//         f1 = f2;
//         f2 = next;
//     }
//     console.log(f2 + " ");


// // Q14
// const arr = [1,2,3,4,5,777];
// const findMaxMin = (arr) => {
//    let max = arr[0];
//    let min = arr[0];
//    for(let i = 0; i < arr.length; i++) {
//       if(arr[i] > max) {
//          max = arr[i];
//       }
//       else if (arr[i] < min) {
//          min = arr[i];
//       }
//    };
//    return {
//       min, max
//    };
// };
// console.log(findMaxMin(arr));





//Q15 
// const arr=[1,2,3,4,6,7,8,9,10];
// arr.sort();
// var start=arr[0];
// var end=arr[arr.length -1];
// for(var i=0;i<arr.length;i++){
//     if(arr[i]==start){
//         start++;
//     }
// }
// console.log(start);

