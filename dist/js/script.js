const menuBar = document.querySelector(".hamburger");
const menuNav = document.querySelector(".navbar");
const menuNavigation = document.querySelector(".menu");
const scriptURL = "https://script.google.com/macros/s/AKfycbysHbw2ORLC2BNTK6SMCI69MqMpMGh5VhJTk6N42HrAjFMeR5GTJA0tDl7Ic_ktE-pf/exec";
const form = document.forms["message-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

menuBar.addEventListener("click", () => {
  menuBar.classList.toggle("is-active");
  menuNavigation.classList.toggle("menu-active");
});

window.addEventListener("scroll", () => {
  menuNav.classList.toggle("nav-scroll-active", window.scrollY > 0);
  windowsPosition = window.scrollY > 200;
  menuBar.classList.toggle("btn-active", windowsPosition);
  menuBar.classList.remove("is-active");
  menuNavigation.classList.remove("menu-active");
});

const loader = document.querySelector(".loader");

const loaderActive = () => {
  loader.classList.add("loader-active");
};

const loaderActiveTime = () => {
  setInterval(loaderActive, 1000);
};

window.onload = loaderActiveTime();
