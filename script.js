// script.js

// NAVBAR SCROLL EFFECT

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){
    navbar.style.background = "rgba(0,0,0,0.75)";
  }
  else{
    navbar.style.background = "rgba(0,0,0,0.25)";
  }

});

// BUTTON ACTIONS

const exploreBtn = document.querySelector(".primary-btn");

exploreBtn.addEventListener("click", () => {

  document
    .getElementById("properties")
    .scrollIntoView({ behavior: "smooth" });

});

// CONTACT FORM

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {

  e.preventDefault();

  alert("Inquiry submitted successfully.");

  contactForm.reset();

});