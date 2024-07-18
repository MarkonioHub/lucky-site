const servicesSliders = document.querySelectorAll('[data-element="services__slider"]')

if (servicesSliders.length) servicesSlidersInit()

function servicesSlidersInit () {
  for (let i = 0; i < servicesSliders.length; i++) {
    servicesSliderInit(servicesSliders[i])
  }
}

function servicesSliderInit (slider) {
  const next = slider.querySelector('.services__nav_right')
  const prev = slider.querySelector('.services__nav_left')
  const pagination = slider.querySelector('.services__pagination')
  const swiper = new Swiper(slider, {
    speed: 500,
    spaceBetween: 20,
    slidesPerView: 1,
    // effect: "fade",
    navigation: {
      nextEl: next,
      prevEl: prev,
    },
    pagination: {
      el: pagination,
      clickable: true,
    },
  })
}
