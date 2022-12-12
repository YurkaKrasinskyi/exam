'use strict'
new WOW().init();

// scroll 

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
   });

   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   }
}

// burger 

const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
   const MenuBody = document.querySelector('.nav');
   iconMenu.addEventListener('click', function(e) {
      document.body.classList.toggle('._lock');
      iconMenu.classList.toggle('._active');
      MenuBody.classList.toggle('._active'); 
   })
}

// slider

new Swiper('.reviews__box', {
   grabCursor: true,
   spaceBetween: 30,
   slidesPerView: 3,
   slidesPerGroup: 1,
   watchOverflow: true,
   speed: 900,

   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
   },
   mousewheel: {
      sensitivity: 1,
   },
   breakpoints: {
      380: {
         slidesPerView: 1,
      },
      800: {
         slidesPerView: 2,
      },
      1024: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      1200: {
         slidesPerView: 2,
      },
   },
});

// form 

const mainForm = document.forms.main;
// console.log(mainForm.elements);

const mainFormInput = mainForm.nameInput;
// console.log(mainFormInput);

const mainFormInputPlaceholder = mainFormInput.placeholder;

mainFormInput.addEventListener("focus", function(e) {
   mainFormInput.placeholder = "";
});
mainFormInput.addEventListener("blur", function(e) {
   mainFormInput.placeholder = mainFormInputPlaceholder;
});

mainForm.addEventListener("submit", function(event) {
   console.log('Відправка форми');

   if (!mainFormInput.value) {
      console.log('Поле nameInput не заповнено');
      event.preventDefault();
   }
})



