//////////////////      OBJECTS         //////////////////////  
/////////////////////////// QUESTION 1 ///////////////////////////// 
var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
};
var key = Object.keys(student)
//console.log(key)

///////////////// QUESTION 2 ////////////////////
//  delete(student.rollno)
// console.log(student)


//////////////// QUESTION 3  ///////////////////////
var len = Object.keys(student)
//console.log("Total Keys in Object are " + len.length)


////////////////  QUESTION 4 ///////////////
var library = [ 
        {
            author: 'Bill Gates',
            title: 'The Road Ahead',
            readingStatus: true
        },
        {
            author: 'Steve Jobs',
            title: 'Walter Isaacson',
            readingStatus: true
        },
        {
            author: 'Suzanne Collins',
            title:  'Mockingjay: The Final Book of The Hunger Games', 
            readingStatus: false
        }];
for(var i=0;i<library.length;i++){
        if(library[i].readingStatus==true){
                console.log(library[i].title+" : "+library[i].readingStatus)
        }
        if(library[i].readingStatus==false){
                console.log(library[i].title+" : "+library[i].readingStatus)
        }
}


//////////////////////// QUESTION 5  ////////////////////
var Cylinder={
         r:2,
         h:2,
         pi:(22/7)
}
var V=Cylinder.pi*Cylinder.r*Cylinder.r*Cylinder.h
//console.log(V.toFixed(4))


//////////////////////////     QUOESTION 6    /////////////////
var c=[99,2,2,1,0]
for(var i=0;i<c.length;i++){
        for(var j=0;j<i;j++){
                if(c[j]>c[i]){
                        var temp=c[j]
                        c[j]=c[i]
                        c[i]=temp
                }
        }
}
//console.log(c)


//////////////////////         QUESTION 7       /////////////////////
var str="dog"
var str2=[]
for(var i=0;i<str.length;i++){
        for(var j=i+1;j<=str.length;j++){
                str2.push(str.substring(i,j))
        }
}
//console.log(str2)


/////////////////////////       QUESTION 8      //////////////////
var t= new Date()
var h=t.getHours()
var m=t.getMinutes()
var s=t.getSeconds()
function a(m,s){
        for(var i=0;i<5;i++){
        console.log(h+":"+m+":"+s)
        s++;
        if(s>=60){
                m++;
                s=0;

        }
}
}
//a(m,s)
xyz=function (a,b){
        var sum=a+b;
        console.log(arguments)
        console.log(sum)
}
xyz(4,5)