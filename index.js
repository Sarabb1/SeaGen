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