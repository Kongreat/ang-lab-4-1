let js = document.getElementById("js");
let ts = document.getElementById("ts");
let ang = document.getElementById("ang");
let images = document.getElementById("images");

// //task 1: a, b

// function loadImage(success, error){
//     js.onload = success;
//     js.onerror = error;
// }

// function loadImage(success, error){
//     let img = document.createElement('img')
//     img.src = "img/js.png"
//     images.appendChild(img)

//     img.onload = success;
//     img.onerror = error;
// }

// loadImage(() =>{
//     console.log("JS icon loaded successfully");
// }, 
//     () => {
//     console.log("JS icon loading failed");
// });

// //****************************** ***************************************/


// C

// function success(){
//     console.log("Js icon loaded successfully");
// }

// function error(){
//     console.log("Js icon loading failed");
// }

// function loadImage(){
//     return new Promise(function(resolve, reject){
//         js.onload = resolve;
//         js.onerror = reject;
//     })
// }

// function loadImage(){
//     return new Promise(function(resolve, reject){
//         let img = document.createElement('img')
//         img.src = "img/js.png"
//         images.appendChild(img)

//         img.onload = resolve
//         img.onerror = reject
//     })
// }

// let promise = loadImage();
// promise.then(success, error);

//********************************************************************************** */

//D


// function success(){
//     console.log("Js icon loaded successfully");
// }


// async function loadImage(){
//      await new Promise((resolve, reject) => {
//         let img = document.createElement('img')
//         img.src = "img/js.png"
//         images.appendChild(img)

//         img.onload = resolve;
//         img.onerror = () => reject(new Error("failed to load"));
        
//     });
// }

// // async function loadImage(){
// //     await new Promise((resolve, reject) => {
// //        js.onload = resolve;
// //        js.onerror = () => reject(new Error("failed to load"));
       
// //    });
// // }


// let promise = loadImage();
// promise.then(success, null).then(()=>{console.log("Continue")});



//******************************************************************************* */


//e

// function allSuccess(){
//     console.log("All icons loaded");
// }


// async function loadImage(url){
//     return await new Promise((resolve, reject) =>{
//         let img = new Image();
//         img.onload = () => resolve(img);
//         img.onerror = () => reject(new Error("failed to load"));
//         img.src = url;
//         images.appendChild(img);
//     });
// }

// loadImage("img/js.png").then(()=>{return loadImage("img/ts.png")}).then(()=>{return loadImage("img/angular.png")}).then(()=>{allSuccess()});





//e2

// function success(){
//     console.log("Js icon loaded successfully");
//     c++
// }

// function error(){
//     console.log("Js icon loading failed");
// }

// function allSuccess(){
//     if(c==3){
//         console.log("All icons loaded");
//     }

    
// }


// async function loadImage(url){
//     return await new Promise((resolve, reject) =>{
//         let img = new Image();
//         img.onload = () => resolve(img);
//         img.onerror = () => reject(new Error("failed to load"));
//         img.src = url;
//         images.appendChild(img);
//     });
// }

// let c = 0

// loadImage("img/js.png").then(success).then(()=> console.log("First")).then(allSuccess)
// loadImage("img/ts.png").then(success).then(()=> console.log("Second")).then(allSuccess)
// loadImage("img/angular.png").then(success).then(()=> console.log("Third")).then(allSuccess)




