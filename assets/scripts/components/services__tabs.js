const servicesTabs = document.querySelectorAll('[data-element="services__tab"]')
const servicesAreas = document.querySelectorAll('[data-element="services__area"]')

if (servicesTabs.length && servicesAreas.length) servicesTabsInit()

function servicesTabsInit () {
  for (let i = 0; i < servicesTabs.length; i++) {
    servicesTabs[i].addEventListener('click', (event) => toggleTab(i, event))
  }

  function toggleTab (i, event) {
    if (event.currentTarget.classList.contains('services__tab_active')) {
      event.currentTarget.classList.remove('services__tab_active')
      removeOldArea()
    } else {
      removeOldTab()
      event.currentTarget.classList.add('services__tab_active')
      removeOldArea()
      servicesAreas[i].classList.add('services__area_active')
    }
  }

  function removeOldArea () {
    const oldArea = document.querySelector('.services__area_active')
    if (oldArea) oldArea.classList.remove('services__area_active')
  }

  function removeOldTab () {
    const oldTab = document.querySelector('.services__tab_active')
    if (oldTab) oldTab.classList.remove('services__tab_active')
  }
}
