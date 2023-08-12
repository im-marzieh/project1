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
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1300: {
            slidesPerView: 4,
            spaceBetween: 50,
        }
    }
});

// * Swiper JS

var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 3,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 40,
        }
    }
});


// * Swiper JS

// var swiper = new Swiper(".mySwiper4", {
//     loop: true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//         el: ".swiper-pagination",
//     },
// });

// Header

window.addEventListener("scroll", scrollHandler);

function scrollHandler() {
    let header = document.getElementById("header");
    header.classList.toggle("active", window.scrollY > 0);
}

// Menu

let about_us = document.querySelector("#about-us");
let about_us_icon = document.querySelector("#about-us-icon")
let dropdown_top = document.querySelector(".dropdown-top");
let gg1 = false;

about_us.addEventListener("click", function () {
    if (window.innerWidth <= 767.98) {
        // dropdown_top.classList.toggle("active");
        if (gg1 == false) {
            dropdown_top.style.height = "180px";
            gg1 = true;
        } else {
            dropdown_top.style.height = "0px";
            gg1 = false;
        }
        about_us_icon.classList.toggle("active");
    }
})

let links = document.querySelector("#links");
let inner_dropdown = document.querySelector(".inner-dropdown");
let link_icon = document.querySelector(".link-icon");
let gg = false;
links.addEventListener("click", function () {
    if (window.innerWidth <= 767.98) {
        if (gg == false) {
            dropdown_top.style.height = "265px";
            gg = true;
        } else {
            dropdown_top.style.height = "180px";
            gg = false;
        }
        link_icon.classList.toggle("active");
    }
    // inner_dropdown.classList.toggle("active");
})

let menu_btn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu")
menu_btn.addEventListener("click", function () {
    menu.classList.toggle("active");
})