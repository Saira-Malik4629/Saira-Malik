// $("#btn").dblclick(()=>{
//     $(".box").text("Hello World");
// })
// $("#click").click(()=>{
//      alert("Hello World")
//  $(".box").show(2000)
//  })
//  $("#click").click(()=>{
//    / alert("Hello World")
//  $(".box").hide(2000)
//  })
    
// $("#click").click(()=>{
//    // alert("Hello World")
// $(".box").toggle(2000)
// })

// $("#cap").click(  ()=>{
//     $(".box").css({
//         fontSize: "100px",
//     backgroundColor: "yellow",
   
// })
// })

// $(".custom").click(()=>{
//     $(".box").text("muniza awan")
//     $(".box").css({
//         fontSize: "50px",
//         backgroundColor: "yellow",
//     })
// })


$(".custom").click(() => {
    let inputText = $("#inputField").val(); // Corrected .val()
    $(".box").text(inputText); // Sets the text
    $(".box").css({ // Corrected .css call
      fontSize: "90px",
      backgroundColor: "yellow"
    });
  });




// $("#btn").click(  ()=>{
//     $(".box").toggle(2000)
// })

// $("#fadebtn").click(   ()=>{
//     $(".box").fadeIn(3000)
// })


// $("#fadebtn").click(   ()=>{
//     $("cap").fadeTo(2000)
// })

// $("#cap").click(   ()=>{
//     $(".box").fadeOut(3000)
// })


// $("#fadebtn").click(   ()=>{
//     $("#cap").fadeToggle(3000)
// })


// $("#cap").click(   ()=>{
//     $(".box").slideUp()
// })


// $("#fadebtn").click(   ()=>{
//     $(".box").slideDown()
// })

// $("#attri").click(  ()=>{
//     alert($(".box").attr({
//         title:"Hello",
//         height: "200px"
//     }))
// })


// $("#attri").click(  ()=>{
//     alert($(".box").removeAttr("class"))})


   
// $("#attri").click(()=>{
//     alert($(".box").text("Changed Text"))
// })

// $("#attri").click(()=>{
//     alert($(".box").html(<h2>This is Text</h2>))
// })

// $("#attri").click(()=>{
//     alert($("input").val(""))
// })

// $("#Fadein").click(  ()=>{
//     $(".box").fadeIn()
// })

// function getData(){
//     console.log("Function Executed")
// }

// getData();

// function getData(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("Hello Everyone");
//         }, 3000)
//     })
// }

// async function showData() {
//     console.log("Fetching data");
//     let data = await getData(); 
//     console.log("")
// }

// async function loadData(){
//     try{
//         let response = await fetch ("")
//         let data = await response.json();
//         console.log("")
//         document.write(JSON.stringify(data));
//     } catch (error){
//         console.error("Error printed:", error);
//     }
// }
// console.log("Resolved Promise")
// consol.log("Resolved Statement")


//     let p= new promise ((resolve, reject) => {
//         setTimeout(()=> resolve("p1 is resolved"));
//     })




//     console.log(p)
// let p2 = new promise ((resolve, reject)=>{
//     resolve('Promise resolved')
// })

// console.log(p2)

// console.log("after promise")
// console.log("after promise")


// console.log("before promise")
// console.log("before promise")
// let p =new Promise((resolve, reject) => {
//     setTimeout(()=> { resolve('promise resolved after 3 seconds');
// },3000)
    
// }) 
// console.log(p)
//     console.log("after promise")
//     console.log("after promise")




// console.log("before promise")
// console.log("before promise")
// let p =new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('promise resolved after 3 seconds');
//     },3000)
    
// }) 

// p.then((value) => {

//     document.write(value)
//     // console.log(err + "Promise Rejected")
// })
// p.catch(err) => {
//     console.log(err+"promise is fulfilled")
// }


// console.log(p)
//     console.log("after promise")
//     console.log("after promise") 


//24 April Lecture JQuery
//$(span).parent().css()



// parentsUntil()
// $(document).ready(function(){
//     $("span").parents(".ancestors").css({"color":"red","border":"5px solid red"});
// });


//parent methods - parent,parents,parentsuntil

// $("span").parents(".ancestors").css({
//     height:"200px",
//     width:"200px",
//     background:"pink",
//     border:"1px solid black",
//     color:"white"
// })

//parent select only nearest single parent and parents select all parents of elements

//children methods - children,find

// $("h1").children().css({
//     height:"200px",
//     width:"200px",
//     background:"pink",
//     border:"1px solid black",
//     color:"white"   
// })

//sibling methods - siblings,next,nextAll,nextUntil.prev,prevAll,prevUntil

// $("li").siblings().css({
//     height:"200px",
//     width:"200px",
//     background:"pink",
//     border:"1px solid black",
//     color:"white"   
// })

//filtering methods - first(),last(),eq(),