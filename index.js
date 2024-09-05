var x = document.getElementById("hamburger");
const close = document.querySelector('#menu');
x.style.display = 'none';

function myFunction() {
    if (x.style.display === "none") {
      x.style.display = "block";
      close.setAttribute('src', 'images/Close.png');
    } else {
      x.style.display = "none";
      close.setAttribute('src', 'images/menu-button.png');
    }
  }

  const heroImage = document.querySelector('.mainImage');
 
  function setBackground() {
      const vpWidth = window.innerWidth;
   
      if (vpWidth >= 1440) {
          heroImage.setAttribute('src', 'images/desktop-banner.png');
      } else if (vpWidth >= 1024) {
          heroImage.setAttribute('src', 'images/laptop-banner.png');
      } else if (vpWidth >= 768) {
          heroImage.setAttribute('src', 'images/tab-banner.png');
      } else {
          heroImage.setAttribute('src', 'images/mobile-banner.png');
      }
  }
   
  setBackground();
   
  window.addEventListener('resize', setBackground);
 
