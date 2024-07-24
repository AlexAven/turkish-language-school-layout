function loadScript(src, id) {
  if (!document.getElementById(id)) {
      const script = document.createElement('script');
      script.src = src;
      script.id = id;
      script.type = 'text/javascript';
      document.head.appendChild(script);
  }
}

function removeScript(id) {
  const script = document.getElementById(id);
  if (script) {
      document.head.removeChild(script);
  }
}

function checkWindowSize() {
  removeScript('swiper-teachers-mobile');
  removeScript('swiper-teachers-desktop');

  if (window.matchMedia("(max-width: 550px)").matches) {
    loadScript('./styles/scripts/swiper-teachers-mobile.js', 'swiper-teachers-mobile');
  } else {
    loadScript('./styles/scripts/swiper-teachers-desktop.js', 'swiper-teachers-desktop');
  }
}

checkWindowSize();

window.addEventListener('resize', checkWindowSize);