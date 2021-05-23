import React from 'react';
import './Scrollup.css'

function scrollup() {

  const scrollToTopButton = document.getElementById('top');

  const scrollFunc = () => {
    let y = window.scrollY;
    
    if (y > 500) {
      scrollToTopButton.className = "top-link show";
    } else {
      scrollToTopButton.className = "top-link hide";
    }
  };

  window.addEventListener("scroll", scrollFunc);

  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 10);
    }
  };

  scrollToTopButton.onclick = function(e) {
    e.preventDefault();
    scrollToTop();
  }

  return (
    <div>
    </div>
  );
}

export default scrollup;