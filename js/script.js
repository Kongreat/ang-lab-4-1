let js = document.getElementById("js");
let ts = document.getElementById("ts");
let ang = document.getElementById("ang");
let images = document.getElementById("images");

// //task 1: a, b
function loadImage(success, error){
    js.onload = success;
    js.onerror = error;
}

loadImage(() =>{
    console.log("JS icon loaded successfully");
}, 
    () => {
    console.log("JS icon loading failed");
});

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

// let promise = loadImage();
// promise.then(success, error);

//********************************************************************************** */

//D


// function success(){
//     console.log("Js icon loaded successfully");
// }

// function error(){
//     console.log("Js icon loading failed");
// }

// async function loadImage(){
//     return await new Promise((resolve, reject) => {
//         js.onload = resolve;
//         js.onerror = reject;
        
//     });
// }


// let promise = loadImage();
// promise.then(success, error).then(()=>{console.log("Continue")});


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

