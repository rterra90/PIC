/*  MENU MOBILE */
function mobileMenu(){
  const btn = document.querySelector('#btn-menu-mobile')
  const expandedMenu = document.querySelector('ul.main-menu')
  const closeBtn = document.querySelector('.fa-times')
  btn.addEventListener('click', function(){
    expandedMenu.classList.add('menu-d-block');
    document.body.classList.add('no-scroll');
    setTimeout(function(){
      expandedMenu.classList.add('active-mobile-menu');
    },10) 
    closeBtn.addEventListener('click', function(){
      expandedMenu.classList.remove('active-mobile-menu')
      document.body.classList.remove('no-scroll')
      expandedMenu.style.opacity="0"
      setTimeout(function(){
        expandedMenu.classList.remove('menu-d-block');
      }, 300)
    })
  })
}


/* ANIMAÇÃO DE ELEMENTOS */
function animate(){
  let animaLeft = document.querySelectorAll('.anima-left')
  let animaZoom = document.querySelectorAll('.anima-zoom')
  let animaZoomH50 = document.querySelectorAll('.anima-zoom-h33')
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
    animaZoomH50.forEach(element=>{
      if(window.scrollY+screenH>(element.offsetTop+(element.offsetHeight/3))){
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

/*SCROLLSPY*/
function scrollSpy(){
  let itemSpy = document.querySelectorAll('.scrollspy-bar li');
  let contentSections = document.querySelectorAll('.contents-frame > div');
  let screenH = window.innerHeight;
  let bar = document.querySelector('.scrollspy-bar');
  let mobile = window.matchMedia('(max-width: 576px)');
  
  if(mobile.matches){
    window.addEventListener('scroll', ()=>{
      contentSections.forEach((element, index)=>{
        if(element.getBoundingClientRect().top<180){
          for(i=0;i<contentSections.length;i++){
                  itemSpy[i].classList.remove('active-spy')
                }
                itemSpy[index].classList.add('active-spy')
        }
      })
      // if(itemSpy[0].getBoundingClientRect().top>120){
      //   for(i=0;i<contentSections.length;i++){
      //     itemSpy[i].classList.remove('active-spy')
      //   }
      // }
      /* anima barra */
      if(bar.getBoundingClientRect().top<110){
        bar.classList.add('active-spy-bar-mobile')
      }else{
        bar.classList.remove('active-spy-bar-mobile')
      }
    })
  }else{
    window.addEventListener('scroll', ()=>{
      contentSections.forEach((element, index)=>{
    if(index=='2'){
      if(window.scrollY+screenH>(element.offsetTop+(element.offsetHeight*0.7))){
        for(i=0;i<contentSections.length;i++){
          itemSpy[i].classList.remove('active-spy')
        }
        itemSpy[index].classList.add('active-spy')
      }
    }else{
      if(window.scrollY+screenH>(element.offsetTop+element.offsetHeight)){
        for(i=0;i<contentSections.length;i++){
          itemSpy[i].classList.remove('active-spy')
        }
        itemSpy[index].classList.add('active-spy')
      }else if(window.scrollY+screenH<contentSections[0].offsetTop+250){
        itemSpy[0].classList.remove('active-spy')
    }
    }  
      })
    })
  }
/*  clique início */
for(m=0;m<itemSpy.length;m++){
  let content = contentSections[m]
  itemSpy[m].addEventListener('click', ()=>{
    window.scrollTo(0, content.offsetTop-70)
  })
}
/* clique fim */
}

/* PROPOSTAS */
function propostas(){
  let btns = document.querySelectorAll('.options-frame > div');
  let display = document.querySelector('.title-display-wide');
  let displayContent = document.querySelector('.wide');
  let mobile = window.matchMedia('(max-width: 576px)');
  let desktop = window.matchMedia('(min-width: 577px)');

  displayContent.style.height="2650px"
  displayContent.style.overflowY="hidden";
  btns[0].classList.add('active-btn-propostas');
  btns[0].classList.add(`color0`)

  if(mobile.matches){
    displayContent.style.height="5000px"
    let frameBtn = document.querySelector('.options-frame')
    let frameTitle = document.querySelector('.title-display')
    frameBtn.parentNode.insertBefore(frameBtn, frameTitle);
  }

  btns.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
      let n = index*-520;
      let nMob = index*-350;
      let m = index*-1080;
      let mMob = index*-400

      if(mobile.matches){
        display.style.transform='translateX('+nMob+'px)';
        displayContent.style.transform='translateX('+mMob+'px)';
      }else{
        display.style.transform='translateX('+n+'px)';
        displayContent.style.transform='translateX('+m+'px)';
      }
 
      displayContent.style.overflowY="hidden";
      for(i=0;i<btns.length;i++){
        btns[i].classList.remove('active-btn-propostas')
        btns[i].className="";
      }
      item.classList.add('active-btn-propostas')
      item.classList.add(`color${index}`)
      /*início height control*/
      if(desktop.matches){
        if(index==0){
          displayContent.style.height="2650px";
        }else if(index==1){
          displayContent.style.height="1900px";
        }else if(index==2){
          displayContent.style.height="3200px";
        }else if (index==3){
          displayContent.style.height="3506px";
        }else if (index==4){
          displayContent.style.height="1900px";
        }else if(index==5){
          displayContent.style.height="1650px";
        }else if(index==6){
          displayContent.style.height="900px";
        }else if(index==7){
          displayContent.style.height="2500px";
        }else if(index==8){
          displayContent.style.height="800px";
        }else if(index==9){
          displayContent.style.height="1600px";
        }else if(index==10){
          displayContent.style.height="2100px";
        }else if(index==11){
          displayContent.style.height="1500px";
        }
      }else{
        if(index==0){
          displayContent.style.height="6300px";
        }else if(index==1){
          displayContent.style.height="8800px";
        }else if(index==2){
          displayContent.style.height="8300px";
        }else if (index==3){
          displayContent.style.height="8800px";
        }else if (index==4){
          displayContent.style.height="4700px";
        }else if (index==5){
          displayContent.style.height="3650px";
        }else if (index==6){
          displayContent.style.height="1900px";
        }else if (index==7){
          displayContent.style.height="6350px";
        }else if (index==8){
          displayContent.style.height="1600px";
        }else if (index==9){
          displayContent.style.height="3320px";
        }else if (index==10){
          displayContent.style.height="4850px";
        }else if (index==11){
          displayContent.style.height="3560px";
        }
            
      }
      /*fim height control*/

    })
  })
}

function backTop(){
  document.querySelector('.fa-chevron-circle-up').addEventListener('click', ()=>{
  window.scrollTo(0, 580)
})
}
