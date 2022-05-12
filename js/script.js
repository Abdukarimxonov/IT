function myFunction(x) {
   x.classList.toggle("change");
   document.body.classList.toggle('lock');
   document.querySelector('.menu').classList.toggle('active');
   mainVideo.classList.remove('played');
   document.querySelector(".our-video__container").classList.remove('played');
   mainVideo.pause();
}

const mainVideo = document.querySelector(".our-video__video");
const playButton = document.querySelector("#play");

playButton.addEventListener("click", function () {
   mainVideo.play();
   if (mainVideo.classList.contains('played')) {
      mainVideo.pause();
   }
   mainVideo.classList.toggle('played');
   document.querySelector(".our-video__container").classList.toggle('played');
});
document.querySelector('.our-video__video').addEventListener('ended', myHandler, false);
function myHandler(e) {
   mainVideo.classList.remove('played');
   document.querySelector(".our-video__container").classList.remove('played');
}

const animItems = document.querySelectorAll('.anim-items');
if (animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll);
   function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 4;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;
         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }

         if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('on-vision');
         } else {
            if (!animItem.classList.contains('anim-no-hide')) {
               animItem.classList.remove('on-vision');
            }
         }
      }
   }
   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
   }

   setTimeout(() => {
      animOnScroll();
   }, 300);
}