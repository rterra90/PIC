
/* ANIMAÇÃO DE ELEMENTOS */
function animate(){
  let animaLeft = document.querySelectorAll('.anima-left')
  let animaZoom = document.querySelectorAll('.anima-zoom')
  let animaImgIntro = document.querySelector('.anima-img-intro')
  let screenH = window.innerHeight
  window.addEventListener('scroll', function(){
    animaLeft.forEach(element=>{
      if(window.scrollY+screenH>(element.offsetTop+element.offsetHeight)){
        element.classList.add('anima-in')
      }
    })
    animaZoom.forEach(element=>{
      if(window.scrollY+screenH>(element.offsetTop+element.offsetHeight)){
        element.classList.add('anima-in')
      }
    })

    if(window.scrollY+screenH>(animaImgIntro.offsetTop+animaImgIntro.offsetHeight/2)){
      animaImgIntro.classList.add('anima-in')
    }

  })
}
