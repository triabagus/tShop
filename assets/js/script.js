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
var swiper = new Swiper(".sliderbox", {
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