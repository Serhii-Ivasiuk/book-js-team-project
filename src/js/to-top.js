export default function scrollToTop() {
  let toTopButton = document.querySelector('.button--back-to-top');
  let displayHeight = document.documentElement.clientHeight;

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > displayHeight / 2 ||
      document.documentElement.scrollTop > displayHeight / 2
    ) {
      toTopButton.style.pointerEvents = 'inherit';
      toTopButton.style.opacity = '1';
    } else {
      toTopButton.style.pointerEvents = 'none';
      toTopButton.style.opacity = '0';
    }
  }

  toTopButton.addEventListener('click', backToTop);

  function backToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
