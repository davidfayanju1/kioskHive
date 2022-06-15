let hamburger = document.querySelector(".navbar-hamburger");
const nav = document.querySelector("nav");
const iconShow = document.querySelector("#icon-burger");
const iconCancel = document.querySelector("#icon-cancel");

iconCancel.style.display = "none";
iconShow.style.display = "block";

hamburger.addEventListener("click", () => {
  if (nav.classList.contains("nav-active")) {
    nav.classList.remove("nav-active");
    iconCancel.style.display = "block";
    iconShow.style.display = "none";
  } else {
    iconCancel.style.display = "none";
    iconShow.style.display = "block";
    nav.classList.add("nav-active");
  }
});


// slick

$(document).ready(() => {
  $('#slick').slick({
    infinite:true,
    slidesToShow:1,
    centerMode: true,
    centerPadding: '360px',
    autoplay: true,
    autoplaySpeed: 7000,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          arrows: true
        }
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          arrows: true
        }
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          arrows: true
        }
      }
    ]
  })
});

// scroll

const scroll = document.querySelector('.scroll-icon');

window.addEventListener('scroll', (e) => {

    if(window.pageYOffset > 70){
      scroll.style.display = 'block'
    }else{
      scroll.style.display = 'none'
    }
})

scroll.addEventListener('click', () => {

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
})

// search filter toggle 

const searchInput = document.querySelector('.search-filter');
const searchToggle = document.querySelector('.background');
burger = document.querySelector('.navbar-hamburger');
const navLogo = document.querySelector('.navbar-brand');
const navReset = document.querySelector('.search-cancel');
const searchContainer = document.querySelector('.search-input')

searchToggle.addEventListener('click', () => {

    burger.classList.add('d-none');

    navLogo.classList.add('d-none');

    navReset.classList.remove('d-none');

    navReset.classList.add('d-block');

    searchInput.style.display = 'block';

    searchContainer.classList.add('full-length');

    searchToggle.classList.remove('radius');

})

navReset.addEventListener('click', () => {

  burger.classList.remove('d-none');

  navLogo.classList.remove('d-none');

  navReset.classList.remove('d-block');

  navReset.classList.add('d-none');

  searchInput.style.display = 'none';

  searchToggle.classList.add('radius');

})


