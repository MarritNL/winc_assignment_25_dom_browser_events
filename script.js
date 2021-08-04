// const button1 = document.getElementById('mybutton') 

// const buttonAlert = function(){
// alert (`button clicked`);
// };
// button1.addEventListener ("click", buttonAlert);

// const myBackground = document.querySelector(".blue-background");
// const button1 = document.getElementById('mybutton'); 

// const makeBackgroundRed = function(){
//     myBackground.classList.add("red-background");
// };
// button1 = document.addEventListener("click", makeBackgroundRed);


const myBackground = document.querySelector(".blue-background");
const button1 = document.getElementById('mybutton'); 

const backgroundToggle = function(){
    myBackground.classList.toggle("red-background");
};
button1 = document.addEventListener("click", backgroundToggle);

