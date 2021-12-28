console.log("working!");
navbar = document.getElementById("navbar-container");
trigger = document.getElementById("scroll-trigger");
console.log(navbar);
document.addEventListener("scroll", () => {
  if (window.pageYOffset >= trigger.offsetTop) {
    console.log(1);
    navbar.style.backgroundColor = "rgb(2,22,30)";
  }
  if (window.pageYOffset <= trigger.offsetTop) {
    console.log(1);
    navbar.style.background = "None";
  }
});
