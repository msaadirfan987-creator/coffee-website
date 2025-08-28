const menubtn = document.getElementById("menubtn")
const unordered = document.getElementById("unordered")
console.log(unordered);

menubtn.addEventListener("click",function () {
    document.body.classList.toggle("saad");
    console.log(menubtn)
})


const swiper = new Swiper('.slider-wrapper', {
  
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

 breakpoints: {
    0:{
        slidesPerView: 1
    },
    425:{
        slidesPerView: 2
    },
    1024:{
        slidesPerView:3 
    },
 }
});