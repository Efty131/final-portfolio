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

//             Vanilla.tilt.js

  VanillaTilt.init(document.querySelectorAll(".service"), {
     max: 25,
     speed: 400
  });

//   sticky nav

const navBar = document.querySelector(".nav");
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});

//       Glides js     "Carousel slider"

const glide = document.querySelector(".glide");
if (glide)
  new Glide(glide, {
    type: "carousel",
    startAt: 0,
    perView: 3,
    gap: 30,
    hoverpause: true,
    autoplay: 2000,
    animationDuration: 800,
    animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
    breakpoints: {
      996: {
        perView: 2,
      },
      768: {
        perView: 1,
      },
    },
  }).mount();
  //more projects button
  let projects = document.querySelector('.more-projects');
  let button = document.querySelector ('#project-btn');
  let span = document.querySelector("#buttonSpan");
  button.addEventListener("click", function(){
       projects.classList.toggle("more-projects-toggle");
       if(span.textContent === "Show More"){
         span.textContent = "Show Less"
       }else{
         span.textContent = 'Show More'
       }
  })
  //navbar more button
  var more = document.querySelector('#more');
  function myFunction(){
    if(more.style.display === "none"){
      more.style.display = 'block';
    }else{
      more.style.display = 'none';
    }
  }