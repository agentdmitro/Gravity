
var swiper = new Swiper('.swiper-container2', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
  });


$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
    });
});


$(document).ready(function() {
    $('.header__list').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
    });
});



$('.works__nav-link').on('click', function(){
    $(this).toggleClass('active')
});




var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    100:{
      centeredSlides: true,
      slidesPerView: 1,
      spaceBetween: 20,
    },
    945: {
      centeredSlides: true,
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1329: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1330: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    2100:{
      slidesPerView: 2,
      spaceBetween: 30,
    }
  });


