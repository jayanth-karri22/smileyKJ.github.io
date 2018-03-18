const portfolioContainer = document.querySelector('.portfolio-items');

portfolioContainer.addEventListener('click', e => {
 // console.log(e);
  e.preventDefault();
  const modalToggle = e.target.closest('.portfolio-link')
  //console.log(modalToggle)

  if(!modalToggle) return
    
  const modal = modalToggle.parentNode.nextElementSibling
  const closeButton = modal.querySelector('.svg-cross')
  //console.log(modal);

  const modalOpen = _=> {
    modal.classList.add('is-open')
    modal.style.animation = 'modalIn 500ms forwards'
    document.body.style.overflowY = 'hidden'
  }
  closeButton.addEventListener('click', _=> {
    document.body.style.overflowY = 'scroll'
    modal.classList.remove('is-open')
  })
  document.addEventListener('keydown', e=> {
    if(e.keyCode === 27){
      document.body.style.overflowY = 'scroll'
      modal.classList.remove('is-open')
    }
  })

  modalOpen()
})