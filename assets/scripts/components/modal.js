const modals = document.querySelectorAll('[data-role="modal"]')
const html = document.getElementsByTagName('html')[0]

if (modals.length) setTimeout(modalsInit,0)

function modalsInit () {
  for (let i = 0; i < modals.length; i++) {
    modalInit(modals[i])
  }
}

function modalInit (modal) {
  const layer = modal.querySelector('[data-role="modal-layer"]')
  const close = modal.querySelector('[data-role="modal-close"]')
  layer.addEventListener('click', closeModal)
  close.addEventListener('click', closeModal)

  function closeModal() {
    modal.classList.remove('modal_active')
    html.classList.remove('html_no-scroll')
  }
}
