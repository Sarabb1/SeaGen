var x = document.getElementById("hamburger");
x.style.display = 'none';

function myFunction() {
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }