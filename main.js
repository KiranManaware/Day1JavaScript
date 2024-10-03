//Array in js  and there important methods
// lets create an array 
let arr=[12,13,14,15,20,15,20,34];//length=6
//idexing 0 to n-1 where n is length of arr
// console.log(arr);
// console.log(arr[2]);
// for(let i=0;i<6;i++){
//     console.log(arr[i]);
// }
// length
// const n= arr.length;
// console.log(n);
//push
// arr.push(100)
// console.log(arr)
//pop
// arr.pop()
// arr.pop()
// console.log(arr)
//unshift
// arr.unshift(24)
// console.log(arr)
//shift
arr.shift()
console.log(arr)

//There are two types of functions in javascript 
// 1)Normal Function
// we have to write the function keyword and the name of the function and perenthisis and the curly braces
//Declaration of function
// function print(){
//     console.log("Hello Everyone,My name is kiran manaware");
// }
// //Calling the function
// print()

//Moving to the next type of function which is arrow function
//Initialization of and declaration of the function 
const output=()=>{
    console.log("hello")
}
output()

// so this is all for today thankyou for watching this video and i will see you next time

//Even or odd number
let n=13;
if(n%2==0){
    console.log("Number is even");
}
else{
    console.log("Number is odd");
}

// for loop
// for(let i=1;i<=10;i++){
//     console.log("Kiran");
// }
//array
// let arr=[12,13,14,19,39];
// console.log(arr)
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }


// Using Months
let month="Auguest";
switch(month){
    case("January"):{
        console.log("Happy new Year");
        break;
    }
    case("fabuary"):{
        console.log("Happy Veltine Day");
        break;
    }
    case("march"):{
        console.log("Happy birthday Ashika");
        break;
    }
    case("april"):{
        console.log("Happy birthday Kiran");
        break;
    }
    case("May"):{
        console.log("Happy birthday Goutam");
        break;
    }
    case("June"):{
        console.log("it is june !");
        break;
    }
    case("juily"):{
        console.log("it is juily !!");
        break;
    }
    case("Auguest"):{
        console.log("Happy independence day");
        break;
    }
    case("September"):{
        console.log("Happy Teacher's Day");
        break;
    }
    case("Octomber"):{
        console.log("Happy Gandhi Jayanti");
        break;
    }
    case("November"):{
        console.log("Happy Childer's Day");
        break;
    }
    case("December"):{
        console.log("Marry Cristmas");
        break;
    }
    default:{
        console.log("Invalid");
    }
}


const student={
    name:"Kiran",
    age:21,
    subject:"English",
    id:343,
    address:"Indore"
}
// console.log(student)
console.log(student.address);
console.log(student['id']);



// var
// var num=123
// num="Kiran"
// var num="Somesh"
// console.log(num);
// function varexample(){
//     if(true){
//         var name1="kiran";
//     }
//     console.log(name1);
    
// }
// varexample();


// let-> cant be updatable but cant be reinitialized
// let num2=2003
// // num2="Angali"
// let num2="KIRAN"
// console.log(num2);
// function letexample(){
//     if(true){
//         let name2="kiran";
//         console.log(name2);
//     }
//     // console.log(name2);
// }
// letexample();


// const->it neither be re-initialzed nor be updatable
// const num3=13
// const num3="kirsn"
// num3=12
// console.log(num3);

function constexample(){
    if(true){
        const name3="kiran";
        console.log(name3);
    }
    console.log(name3);
}
constexample();



