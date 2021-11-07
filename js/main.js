/* navbar toggle btn*/
let toggleBtn = document.querySelector('#toggle-btn');
let primaryMenu = document.querySelector('.primary-menu');

toggleBtn.onclick = () => {
    toggleBtn.classList.toggle('fa-times');
    primaryMenu.classList.toggle('active');
}
/* scrollspy*/
window.onscroll = () => {
    toggleBtn.classList.remove('fa-times');
    primaryMenu.classList.remove('active');
}
/* search forn*/
let searchForm = document.querySelector('#search-form');
let searchIcon = document.querySelector('#search-icon');
let closeIcon = document.querySelector('#close-icon'); 
searchIcon.onclick = () => {
    searchForm.classList.toggle('active');
}
closeIcon.onclick = () => {
    searchForm.classList.remove('active');
}

 /* Initialize Swiper for slider*/
var swiper = new Swiper(".hero-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

 /* Initialize Swiper for Review*/
 var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop:true,
  breakpoints:{
    0 : {
      slidesPerView: 1,
    },
    600 : {
      slidesPerView: 2,
    },
    768 : {
      slidesPerView: 2,
    },
    992 : {
      slidesPerView: 3,
    },
  },
 
});

 /* Setup Loder */

 function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
 }
 function fadeOut(){
   setInterval(loader , 3000);
 }
 window.onload = fadeOut;


