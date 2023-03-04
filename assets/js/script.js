const triggerOpen  = document.querySelectorAll('[trigger-button]')
const triggerClose = document.querySelectorAll('[trigger-close]')
const overlay      = document.querySelector('[data-overlay]')

for(let i = 0; i < triggerOpen.length; i++){
    let currentId  = triggerOpen[i].dataset.target,
    targetEl       = document.querySelector(`#${currentId}`)
    
    const openData = function(){
        targetEl.classList.remove('active')
        overlay.classList.remove('active')
    }
    triggerOpen[i].addEventListener('click', function(){
        targetEl.classList.add('active')
        overlay.classList.add('active')
    })

    targetEl.querySelector('[trigger-close]').addEventListener('click', openData)
    overlay.addEventListener('click', openData)
}

// mobile-menu submenu
const submenu = document.querySelectorAll('.child__trigger')

submenu.forEach((menu) => menu.addEventListener('click', function(e){
    e.preventDefault()

    submenu.forEach((item) => item != this ? item.closest('.has__child').classList.remove('active') : null)
    if(this.closest('.has__child').classList != 'active'){
        this.closest('.has__child').classList.toggle('active')
    }
}))

// Slider
const swiper = new Swiper(".sliderbox", {
  direction: "horizontal",
  loop: true,
  effect: "fade",
  autoHeight: true,
  grabCursor: true,
  
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,    
  }
});

// Carousel
const carousel = new Swiper('.carouselbox', {
    spaceBetween: 30,
    sliderperView: 'auto',
    centeredSlides: true,

    // If we need pagination
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        481: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            centeredSlides: false, 
        },
        640: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            centeredSlides: false, 
        },
        992: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            centeredSlides: false, 
        },
    }
}) 