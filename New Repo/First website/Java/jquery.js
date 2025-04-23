$("#btn").dblclick(()=>{
    $(".box").text("Hello World");
})
// $("#click").click(()=>{
//      alert("Hello World")
//  $(".box").show(2000)
//  })
//  $("#click").click(()=>{
//    / alert("Hello World")
//  $(".box").hide(2000)
//  })
    
$("#click").click(()=>{
   // alert("Hello World")
$(".box").toggle(2000)
})

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


    // $("#attri").click(  ()=>{
    //     alert($(".box").css({
    //         fontSize: "100px",
    //     backgroundColor: "yellow",
       
    // }))
    // })
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

getData();

function getData(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Hello Everyone");
        }, 3000)
    })
}

async function showData() {
    console.log("Fetching data");
    let data = await getData(); 
    console.log("")
}

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