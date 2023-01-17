const hamburger = document.querySelector('.hamburger');
const navContainer = document.querySelector('.navlist-wrapper');
const links = document.querySelectorAll('.nav-link')

hamburger.addEventListener('click', ()=>{
  console.log('clicked')
  navContainer.classList.toggle('show-nav')
})

links.forEach(link => {
  link.addEventListener('click', ()=> {
    navContainer.classList.remove('show-nav')
  })
})

var swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  keyboard: {
    enanle: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  mousewheel: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
})
