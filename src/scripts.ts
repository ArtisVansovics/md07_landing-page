const headerNavLinks = ['Home', 'Events', 'About', 'Blog', 'Contact'];

const navEl = document.querySelector<HTMLElement>('.nav--header');
const inputEmailEl = document.querySelector<HTMLInputElement>('#emailAddress');
const inputListEl = document.querySelector<HTMLUListElement>('.input-list');
const subscribeBtnEl = document.querySelector<HTMLButtonElement>('.btn--sub');

// const slideshowSlidesEl = document.querySelectorAll<HTMLLinkElement>('.slideshow__slide');
// const slidePrevEl = document.querySelector<HTMLLinkElement>('.slide-button--prev');
// const slideNextEl = document.querySelector<HTMLLinkElement>('.slide-button--next');

// Load header nav-links on page load

document.addEventListener('DOMContentLoaded', () => {
  const navContainer = document.createDocumentFragment();

  for (let i = 0, len = headerNavLinks.length; i < len; i += 1) {
    const navLink = navContainer.appendChild(document.createElement('a'));
    navLink.innerText = headerNavLinks[i];
    navLink.className = 'nav__link ';
  }

  navEl.appendChild(navContainer);
});

// Input of email input field shows under it after it is submitted

subscribeBtnEl.addEventListener('click', (e) => {
  e.preventDefault();
  const fieldInput = inputEmailEl.value;
  const newListEl = document.createElement('li');
  newListEl.innerText = fieldInput;

  inputListEl.appendChild(newListEl);
  inputEmailEl.value = '';
});

// Slideshow

// const slideIndex = 0;

// slideshowSlidesEl[3].style.display = 'none';

// slidePrevEl.addEventListener('click', () => {
//
// });
//
// slideNextEl.addEventListener('click', () => {
//   current = 1;
//   const slides = [...slideshowSlidesEl];
//   const len = slides.length;
//   const first = slides[0];
//   const second = slides[1];
//   const last = [2];
// });

// slideNextEl.addEventListener('click', () => {
//   slideIndex += 1;
//   if (slideIndex < slideshowSlidesEl.length) {
//     slideshowSlidesEl[slideIndex].classList.add('last-xs');
//   }
// });

// slideNextEl.addEventListener('click', () => {
//   slideIndex += 1;
//   const slides = [...slideshowSlidesEl];
//   if (slideIndex < slides.length) {
//     slides.unshift();
//   } else console.log('no');
//   // slideIndex += 1;
//   // if (slideIndex < slideshowSlidesEl.length) {
//   //   headerNavLinks.unshift(headerNavLinks.pop());
//   //   slideshowSlidesEl[slideIndex].style.display = 'none';
//   //   slideshowSlidesEl[slideshowSlidesEl.length - 1].style.display = 'block';
//   // } else console.log('no');
// });
