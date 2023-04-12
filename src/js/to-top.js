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
      toTopButton.removeAttribute('style');
    } else {
      toTopButton.style.pointerEvents = 'none';
      toTopButton.style.opacity = '0';
    }
  }

  if (!toTopButton.hasAttribute('style')) {
    toTopButton.addEventListener('click', backToTop);

    function backToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }
}
