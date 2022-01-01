console.log("working!");
navbar = document.getElementById("navbar-container");
trigger = document.getElementById("scroll-trigger");
nav_links = document.getElementsByClassName("nav-item");
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

// clock
function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector(".days");
  const hoursSpan = clock.querySelector(".hours");
  const minutesSpan = clock.querySelector(".minutes");
  const secondsSpan = clock.querySelector(".seconds");

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = new Date(Date.parse(new Date(2022, 2, 1)));
initializeClock("clockdiv", deadline);

//nav-items

[...nav_links].forEach((nav_link) => {
  nav_link.addEventListener("click", () => {
    id = nav_link.getAttribute("name");
    console.log(id);
    element = document.getElementById(id);
    element.scrollIntoView((options = { behavior: "smooth" }));
  });
});
