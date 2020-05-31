const loadingBarItemEl = document.querySelector(".loading-bar__item");
const loadingBar2ItemEl = document.querySelector("#loading-bar2");
const loadingBar3ItemEl = document.querySelector("#loading-bar3");
const button1El = document.querySelector(".first__button")

// *DISREGARD BUTTONS. ILL GET BACK TO IT WHEN I KNOW MORE :D

// function buttonClick() {
//   let width = 1;
// button1El.addEventListener("click", function(
//   let loadingBar = setInterval(function(){
//     if (width >= 100) {
//       clearInterval(loadingBar)
//     } else {
//       width++;
//       loadingBarItemEl.style.width = width + "%"
//     }
//   }, 100)
// )}



// Loading Bar # 1
let width = 1;
let loadingBar = setInterval(function(){
  if (loadingBarItemEl.style.width >= 100) {
    clearInterval(loadingBar)
  } else {
    width++;
    loadingBarItemEl.style.width = width + "%"
  }
}, 100)


// Loading Bar # 2
let loadingbar2 = setInterval(function(){
  if (loadingBar2ItemEl.style.width >= 100) {
    clearInterval(loadingBar)
  } else {
    width++;
    loadingBar2ItemEl.style.width = width + "%"
  }
}, 5000)

// Loading Bar # 3
let loadingBar3 = setInterval(function() {
  if (loadingBar3ItemEl.style.width >= 100) {
    clearInterval(loadingBar)
  } else {
    width++;
    loadingBar3ItemEl.style.width = width + "%"
  }
}, 300)

