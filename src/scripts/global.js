window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const homeButton = document.getElementById("home-arrow")
  if (document.body.scrollTop > window.innerHeight / 2 || document.documentElement.scrollTop > window.innerHeight / 2) {
    homeButton.style.display = "block";
  } else {
    homeButton.style.display = "none";
  }
}