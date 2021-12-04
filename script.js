//       Navbar

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

new Typed('#type1', {

  strings: ['web developer', 'programmer','coder'],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true,
});
new Typed('#type2', {

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

//          GSAP

gsap.from(".logo", {opacity: 0, duration: 1, delay: 5, y: 10});
gsap.from(".hamburger", {opacity: 0, duration: 1, delay: 1, x: 20});
gsap.from(".banner", {opacity: 0, duration: 1, delay: 1.5, x: -200});
gsap.from(".hero h3", {opacity: 0, duration: 1, delay: 2, y: 50});
gsap.from(".hero h1", {opacity: 0, duration: 1, delay: 2.5, y: -45});
gsap.from(".hero h4", {opacity: 0, duration: 1, delay: 3, y: -30});
gsap.from(".hero a", {opacity: 0, duration: 1, delay: 3.5, x: -20});
gsap.from(".nav-item", {opacity: 0, duration: 1, delay: 1.2, y: 30, stagger: 0.2,});