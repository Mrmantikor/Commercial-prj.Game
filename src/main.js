import {
  gsap,
  ScrollTrigger,
  Draggable,
  Flip,
  MotionPathPlugin,
  ScrollToPlugin,
} from 'gsap/all';

gsap.registerPlugin(
  ScrollTrigger,
  Draggable,
  Flip,
  MotionPathPlugin,
  ScrollToPlugin
);

const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');
const body = document.body;

const openMenu = () => {
  burger.classList.add('active');
  body.classList.add('menu-open');
  gsap.to(mobileMenu, {
    x: 0,
    duration: 0.5,
    ease: 'power3.out',
  });
};

const closeMenu = () => {
  burger.classList.remove('active');
  body.classList.remove('menu-open');
  gsap.to(mobileMenu, {
    x: '100%',
    duration: 0.4,
    ease: 'power2.in',
  });
};

burger.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const headerOffset = 59;
      const y =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset -
        headerOffset;

      gsap.to(window, {
        scrollTo: { y: y, autoKill: true },
        duration: 1,
        ease: 'power2.out',
      });
    }

    closeMenu();
  });
});
