const headerNavLinks = ['Home', 'Events', 'About', 'Blog', 'Contact'];
const footerColors = ['#7F2736', '#578034', '#1B8067', '#772180', '#1B6180'];

const navEl = document.querySelector<HTMLElement>('.nav--header');
const toastEl = document.querySelector<HTMLDivElement>('.toast');
const footerEl = document.querySelector<HTMLDivElement>('.container--footer');
const inputEmailEl = document.querySelector<HTMLInputElement>('#emailAddress');
const inputListEl = document.querySelector<HTMLUListElement>('.input-list');

const toastBtnEl = document.querySelector<HTMLButtonElement>('.btn--toast');
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

// When typing into the email input field, footer background changes to a random color

const chooseName = () => {
  const num = Math.floor(Math.random() * footerColors.length - 4);
  const colorBg = footerColors.splice(num, 1);
  footerColors.push(...colorBg);
  return colorBg.join();
};

inputEmailEl.addEventListener('input', () => {
  footerEl.style.backgroundColor = chooseName();
});

// When 'Watch how it works' button is clicked, a toaster appears

toastBtnEl.addEventListener('click', () => {
  toastEl.style.display = 'block';
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
