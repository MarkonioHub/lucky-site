const contactsForm = document.querySelector('[data-element="contacts__form"]')

if (contactsForm) contactsFormInit()

function contactsFormInit () {
  const modalThanks = document.querySelector('.modal-thanks')
  const html = document.getElementsByTagName('html')[0]
  const inputPhone = contactsForm.querySelector('[data-role="form-validate-phone"]')
  const inputName = contactsForm.querySelector('[data-role="form-validate-name"]')
  const inputPolicy = contactsForm.querySelector('[data-role="form-validate-policy"]')

  const maskPhone = new IMask(inputPhone, { mask: '+{7} (000) 000-00-00' })
  const maskName = new IMask(inputName, { mask: /^[А-ЯЁa-zA-Z\s]+$/i })

  inputPhone.addEventListener('input', removeError)
  inputName.addEventListener('input', removeError)
  inputPolicy.addEventListener('input', removeError)
  contactsForm.addEventListener('submit', validate)

  function removeError () {
    this.classList.remove('input-error')
  }

  function validate (e) {
    e.preventDefault()
    let isValid = true
    if (maskPhone.unmaskedValue.length < 11) {
      inputPhone.classList.add('input-error')
      isValid = false
    }
    if (!inputName.value) {
      inputName.classList.add('input-error')
      isValid = false
    }
    if (!inputPolicy.checked) {
      isValid = false
      inputPolicy.classList.add('input-error')
    }
    if (isValid) fetchForm()
  }

  async function fetchForm () {
    const url = '/api/contacts'
    fetch(url, {
      method: 'post',
      body: new FormData(contactsForm),
    })
      .then(res => { return res.json() })
      .then(data => { success() })
      .catch(() => {
        console.log('error')
      })

    success()

    function success () {
      openThanks()
      maskPhone.value = ''
      inputName.value = ''
    }
  }

  function openThanks () {
    modalThanks.classList.add('modal_active')
    html.classList.add('html_no-scroll')
  }
}
