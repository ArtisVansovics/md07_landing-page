const headerNavLinks = ['Home', 'Events', 'About', 'Blog', 'Contact'];

const navEl = document.querySelector<HTMLElement>('.nav--header');

document.addEventListener('DOMContentLoaded', () => {
  const navContainer = document.createDocumentFragment();

  for (let i = 0, len = headerNavLinks.length; i < len; i += 1) {
    const navLink = navContainer.appendChild(document.createElement('a'));
    navLink.innerText = headerNavLinks[i];
    navLink.className = 'nav__link ';
  }

  navEl.appendChild(navContainer);
});
