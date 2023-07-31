// Typed Js
var typed = new Typed('#element', {
    strings: [
        'ما میخواهیم بهترین مربی زندگی باشیم',
        'ما میخواهیم بهترین سخنران در آموزش باشیم',
    ],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true
});

// Swiper Js
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


// * Swiper JS
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});