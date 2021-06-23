import './style.scss';

const showMenu = function (toggleId, navId) {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);
  if (toggle) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu');
    });
  }
};

showMenu('nav-toggle', 'nav-menu');

const navLink = document.querySelectorAll('.nav__link');

function lickAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}

navLink.forEach((el) => el.addEventListener('click', lickAction));

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active-link');
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

function scrollHeader() {
  const nav = document.getElementById('header');
  if (this.scrollY >= 200) {
    nav.classList.add('scroll-header');
  } else {
    nav.classList.remove('scroll-header');
  }
}

window.addEventListener('scroll', scrollHeader);

function scrollTop() {
  const scrollTop = document.getElementById('scroll-top');
  if (this.scrollY >= 560) {
    scrollTop.classList.add('scroll-top');
  } else {
    scrollTop.classList.remove('scroll-top');
  }
}

window.addEventListener('scroll', scrollTop);

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';

const iconTheme = `bx-sun`;

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  );
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](
    iconTheme
  );
}

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';

const sr = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 2000,
  reset: true,
});

sr.reveal(
  `.home__data, .home__img, .about__data, .about__img, .services__content, .menu__content,.app__data, .app__img, .contact__data, .contact__button, .footer__content`,
  {
    interval: 200,
  }
);
