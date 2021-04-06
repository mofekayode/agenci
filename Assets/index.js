AOS.init();
const ham = document.querySelector('.ham')
const close = document.querySelector('#close')
const premenu = document.querySelector('.premenu')
const postmenu = document.querySelector('#inner')
const angle= document.querySelector('.angle')
const dash= document.querySelector('.dash')

ham.addEventListener('click', (e) => {
   console.log('clicked')
  postmenu.style.display='block'
  premenu.style.display='none'
  postmenu.style.transition='0.5s ease;'

})

close.addEventListener('click', (e) => {
  console.log('clicked')
 postmenu.style.display='none'
 premenu.style.display='block'
  premenu.style.transition='0.5s ease;'
})

dash.addEventListener('mouseover', (e) => {
  setTimeout(function() {
dash.style.display='none'
angle.style.display='block'
 angle.style.transition='0.5s ease;'
}, 100);
setTimeout(function() {
dash.style.display='block'
angle.style.display='none'
angle.style.transition='0.5s ease;'
}, 1000);
})
