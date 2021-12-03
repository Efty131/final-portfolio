const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");

const navLeft = menu.getBoundingClientRect().left;
navOpen.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.add("show");
    document.body.classList.add("show");
    navBar.classList.add("show");
  }
});

navClose.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.remove("show");
    document.body.classList.remove("show");
    navBar.classList.remove("show");
  }
});

//         Typed.js

const typed = new Typed('#type1', {

  strings: ['web developer', 'programmer','coder'],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true,
});

//           PreLoader

let loader = document.getElementById('preloader');
  
   window.addEventListener("load", function(){
       loader.style.display = "none";
   })

//            Night Mode

let dayNight = document.querySelector(".dayNight");
const body = document.querySelector("body");

      dayNight.onclick = function(){
        body.classList.toggle('dark');
        dayNight.classList.toggle('active');
  }