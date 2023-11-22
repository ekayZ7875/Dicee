// 'var randomNumber = Math.floor(Math.random()*6)+1;
// var randomImageSource = "dice" + randomNumber + ".png";
// document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);


// var randomNumber2 = Math.floor(Math.random()*6)+1;
// var randomImageSource2 = "dice" + randomNumber2 + ".png";
// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// if (randomNumber > randomNumber2) {
//     document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
//   }
//   else if (randomNumber2 > randomNumber) {
//     document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
//   }
//   else {
//     document.querySelector("h1").innerHTML = "Draw!";
//   }

  






// function loadScript(src,callback){

//   let script=document.createElement("script");
//   script.src=src;

//   script.onload = ()=>{
//     prompt("script loaded",src);
//   }

//   script.onerror = ()=>{
//     alert("this is an erorr")
//   }

//   document.body.appendChild(script);

// }


// loadScript("http://127.0.0.1:5500/index.html")


// let promise = new Promise((resolve, reject) => {
//   console.log('heyy');
//   resolve(102);
// });

// setTimeout (function hello(){

//   console.log("hello");


// },2000);



// console.log(promise)






// let p11 = new Promise((resolve, reject) => {
//   console.log("your promise is pending");
//   setTimeout(()=>{
//     console.log("your promise is done");
//    resolve(true);
//   },5000);
// });


// let p12 = new Promise((resolve, reject) => {
//   console.log("your promise is pending");
//   setTimeout(()=>{
//     console.log("your promise is done");
//     reject(new Error(("error found")));
//   },5000);
// });

// p2.catch((Error)=>{

//   console.log("i got an error".Error);

// });













// ﻿
// let p1 = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     resolve("heyy");
//   },1000);

// });


// let p2 = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     resolve("heyy2");
//   },2000);

// });


// let p3 = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//   resolve("heyy3");
//   },3000);

// });


// let promise_all = Promise.allSettled([p1,p2,p3]);
// promise_all.then((value)=>{
//   console.log(value);
// });



// async function eklavya(){
//   return 7875;
// };

// eklavya().then((value)=>{
//   console.log(value);
// });


// async function ekayz(){


// let delhiWeather = new Promise((resolve,reject)=>{

//   setTimeout(()=>{
//   resolve("27 deg");
//  },2000);

// });

// let banagaloreWeather = new Promise((resolve, reject) => {

//   setTimeout(()=>{
//     resolve("21 deg");
//    },5000);

// });

// delhiWeather.then(alert);

// bangaloreWeather.catch(Error);
// console.log("i got a error",error);

// }



// console.log("we are fetching weather");
// harry();




// const express = require("express");

// const path = require("path");


// const publicPath = path.join(__dirname,'dicee');
// // app.use(express.static(publicPath));
// console.log(publicPath);






// const app = express();

// const users = {
  
//     name:"ekayz",
//     age:30
  
// };



// app.get('/' ,(req,res)=>{
//  res.send(users)
// });

// app.listen(3030,()=>{
//   console.log("server has started");
// });














  


