function scrollToTop() {
  let toTopButton = document.querySelector('.button--back-to-top');
  let displayHeight = document.documentElement.clientHeight;
  let isListenerAdded = false;

  window.onload = function () {
    toTopButton.style.pointerEvents = 'none';
    toTopButton.style.opacity = '0';
  };

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > displayHeight / 2 ||
      document.documentElement.scrollTop > displayHeight / 2
    ) {
      toTopButton.removeAttribute('style');
      if (!isListenerAdded) {
        toTopButton.addEventListener('click', backToTop);
        isListenerAdded = true;
      }
    } else {
      toTopButton.style.pointerEvents = 'none';
      toTopButton.style.opacity = '0';
      if (isListenerAdded) {
        toTopButton.removeEventListener('click', backToTop);
        isListenerAdded = false;
      }
    }
  }

  function backToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    toTopButton.removeAttribute('style');
    toTopButton.removeEventListener('click', backToTop);
    isListenerAdded = false;
  }
}

scrollToTop();
