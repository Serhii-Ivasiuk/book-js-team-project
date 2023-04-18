import { refs } from './refs';

window.addEventListener('scroll', function () {
  const sidebarHeight = refs.sidebar.offsetHeight;
  const contentHeight = refs.content.offsetHeight;
  const scrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition === 0) {
    refs.sidebar.scrollTop = 0;
  }

  if (scrollPosition + window.innerHeight >= contentHeight) {
    refs.sidebar.scrollTop =
      sidebarHeight - window.innerHeight + contentHeight - scrollPosition;
  }
});
