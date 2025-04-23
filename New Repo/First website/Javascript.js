// let arr =["Apple",  "Mango", "Kiwi", "Orange"];
// console.log(arr.length);

// console.log(arr.toString());  

// console.log(arr.at(2));

// document.write(arr.at())

// console.log(arr.at(2)); It Merge all the Values in the array
// // document.write(arr.join("  "))

// arr.pop()   Removes the last value from queue
// console.log(arr);

// arr.push("banana")    to add the value in the end

// console.log(arr[3]);
// // arr.pop();
// delete arr[3]

// let arr1=["mango", "Orange", "Kiwi"]
// let arr2=["Gajar", "Muli", "Mirchain",]


// let newarr=arr1.concat(arr2);

// console.log(newarr)

// let arra=["Pakistan", "India", "Malaysia", "Indonesia", "China",]
// // console.log(arra.length);
// //  console.log(arra.toString());
// // // console.log(arr[0]);
// // console.log(arra.at(2));
// arra.pop()

// // console.log(arra[0])
//  document.write(arra.join("  $  "))

// console.log(arra)

// let arre=["UnitedKingdom", "Ireland", "Canada", "America", "UnitedStates"]
// // console.log(arre(5))
// arre.pop()
// arre.copyWithin(2,0);
// console.log(arre)

//        // Switch Statement
//         let day = Number(prompt("Enter any number to find the day"));

//         switch (day) {
//             case 1:
//                 document.write("its monday");
//                 break;
//             case 2:
//                 document.write("its tuesday");
//                 break;
//             case 3:
//                 document.write("its wednesday");
//                 break;
//             case 4:
//                 document.write("its thursday");
//                 break;
//             case 5:
//                 document.write("its friday");
//                 break;
//             case 6:
//                 document.write("its saturday");
//                 break;
//             case 7:
//                 document.write("its sunday");
//                 break;
//             default:
//                 document.write("its not a weekday");

//         }

        // let today = new Date().toLocaleTimeString();
        // let today = new Date().getDate();

        // document.write(today )



    //     const cars=["BMW", "Volvo", "Saab", "Ford", "Audi"];
    // for(let i = 0 ; i < cars.length; i++ ){
    //     document.write(i + " "+ cars [i] + "<br>")
    // }

//    let num = Number(prompt("enter a number"));

//    for(let i = 1; i<=10; i++){
//     document.write(num + "x" + i +"=" +(num*i) + "<br>")
//    }



//Username and password verification

// let user= prompt("enter the username")
// let pass = prompt("enter password")

// if(user=="Admin" && pass==12345){
//     document.write("Access granted.<br>")
// }else{
//     document.write("Invalid credentials.<br>")
// }

//Find the average of 3 numbers

// let num = 9+12+6;
// let average = num/3;
// document.write(average);

//Find the largest of 3 numbers

// let num1 = prompt("enter 1st number")
// let num2 = prompt("enter 2nd number")
// let num3 = prompt("enter 3rd number")

// if(num1 > num2 && num1 > num3){
//     document.write("First number is largest which is " + num1)
// }else if(num2 > num1 && num2 > num3){
//     document.write(" Second number is largest which is " + num2) 
// }else{
//     document.write("Number 3 is greatest which is " + num3)
// }

//Find the smallest of 3 numbers

// let numa = prompt("enter 1st number")
// let numb = prompt("enter 2nd number")
// let numc= prompt("enter 3rd number")

// if(numa < numb && numa < numc){
//     document.write("First number is smallest which is " + numa)
// }else if(numb < numa && numb < numc){
//     document.write(" Second number is smallest which is " + numb) 
// }else{
//     document.write("Number 3 is smallest which is " + numc)
// }



// function hello(p1, p2){       //parameters
//     document.write(p1+p2)
//     // console.log("Hello World")
//     // alert("hello World")
// }

// hello(10, 10);    //arguments



// let a=10;(prompt("Enter your Number"))
// let b=8;  (prompt("Enter your Number"))
// let c=22;  (prompt("Enter your Number"))

// function hello(p1, p2, p3){
//     document.write((p1+p2+p3) / 3 )
//     document.write((p1+p2+p3) / 3 )
//     document.write((p1+p2+p3) / 3 )
    
// }

// hello(a, b, c)


//declaring function in loop

// let d=90; (prompt("Enter your Number"))
// let g=50;  (prompt("Enter your Number"))
// let n=20;   (prompt("Enter your Number"))

// function hello(p1, p2, p3){

// if(p1 > p2 ) {
//     (document.write("P1 is the Largest Number."))
// }
// else if( p2 > p3) {
//     (document.write("P2 is the Large Number"))
// }
// else(document.write("Invalid Statement"))
// }


// hello(d, g, n)
// && p2 > p3
// p2 > p3 &&

// function date({
// let today= new Date().toLocaleTimeString();
        

//         document.write(today )
//     }

//     date();

// //Code for showing date n time local
//     function date(){
//         let day=new Date().toLocaleString();
//         let today=new Date().toTimeString();
//         document.write(day)
//         document.write(today)
//     }
//     date();

//return function

// const ret=function (p1){
//     return (p1 /3);
// }
// //  const a=ret(288)
//  const ret1 = p1 => console.log( p1 / 3 )
//  ret1=(288)

//  document.write(ret(587))




// let num= Number(prompt("Enter a number"))

//  function table(p1){ 
//     let i = 0;
    
//     while (i<=30) {
//         document.write("<br>" + p1 + "x" + i + "=" + (p1*i))
//         i++;
//     }
// }

// table(num)




//Do while Loop
// let i=15;


// do {
//     document.write("<br> num========>" +i)
//     i++;
// } while (i < 10);


//For In Loop

// let obj={name:"asim", age:29, rollnum:549}
// for (let x in obj) {
//     document.write(obj);
//     console.log(obj);
// }

//There's only syntax difference in these loops.
//we suppose x to store the values of variable name.
//For of Loop

// let arr=["asim", "Hello", 549];
// for (let x of arr){
//     document.write(x);
//     console.log(x);
// }



//DOM HTML
//document.getElementById("heading").innerText="How are you doing? fyrc"
//document.getElementsByTagName("h1")[1].style.background="red"

//Query Selector
//document.querySelector("#heading").innerHTML="TExt Written";
//document.querySelectorAll(".heading").innerHTML="Again TExt Changed";


//In innertext it reads all the given commands as text, that's why we use innerHTML to for using HTML tags.

// let head = document.getElementById("heading");
// head.innerHTML = "<p>Lorem Ipsum</p>"
// head.innerText = "<p>Lorem Ipsum</p>"

// let image = document.getElementById("image");
// image.setAttribute("src", "../download11.png")


//already exited vallues 
//document.write( document.getElementsByTagName("h1")[0].getAttribute("class"))


//head.classList.add("class_add")
//head.classList.remove("class_add")
// head.checkList.toggle("Class-add")n


// let para = document.getElementById("para");

// const tag1 = document.createElement("h1");
// tag1.innerHTML="Hello World";
// document.body.appendChild(tag1)


//insert before

// const tag2 = document.createElement("h2");
// tag2.innerHTML = "Hi There We're Happy";
// document.body.insertBefore(tag2, para);

//para.parentNode.insertBefore(tag2, para2);


//  let btn = document.getElementById("btn");
//  btn.addEventListener("contextmenu", function (){
//      alert("button clicked");
//  })


// let btn = document.getElementById("btn");

// btn.style.backgroundColor ="green";
// btn.style.color="white";
// btn.style.border="solid";
// btn.style.borderRadius="400px";
// btn.style.padding="20px";



//Time Out
// console.log("Hello this is Time Out");
// console.log("Hello This is Time Out");
// console.log("Hello This is Time Out");
// console.log("Hello This is Time Out");

// setTimeout(()=>{
//     console.log("TimeOut running after 3 scnds");
// }, 3000   )



//setInetrval

// console.log("Hello this is Time Interval");
// console.log("Hello This is Time Interval");
// console.log("Hello This is Time Interval");
// console.log("Hello This is Time Interval");

// setInterval(()=>{
//     console.log("Running after 5 seconds")
// }, 5000 )

// let btn1=document.getElementById("btn")[0];
// // let bgcolor=document.getElementById("")

// btn=addEventListener("click", ()=>{
    // document.querySelector("para").style.backgroundColor=bgcolor.value

//     console.log(btn.previousElementSiblings);
// })

