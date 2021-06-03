/*  MENU MOBILE */
function mobileMenu(){
  const btn = document.querySelector('#btn-menu-mobile')
  const expandedMenu = document.querySelector('ul.main-menu')
  const closeBtn = document.querySelector('.fa-times')
  btn.addEventListener('click', function(){
    expandedMenu.classList.add('active-mobile-menu')
    document.body.classList.add('no-scroll')
    closeBtn.addEventListener('click', function(){
      expandedMenu.classList.remove('active-mobile-menu')
      document.body.classList.remove('no-scroll')
    })
  })
}


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

/*ACCORDION HOME MOBILE*/
function accordionFacts(){
const accordion = document.querySelectorAll('.accordion-box')
for(i=0;i<accordion.length;i++){
  accordion[i].addEventListener('click', function(){
    if(this.classList.contains('active-accordion')){
      this.classList.remove('active-accordion');
  }else{
  for(j=0;j<accordion.length;j++){
  accordion[j].classList.remove("active-accordion");
  }
  this.classList.toggle('active-accordion')
}
  })
}
}