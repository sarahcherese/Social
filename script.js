document.getElementById("year").textContent = new Date().getFullYear();

const contactForm = document.getElementById("contactForm");
const contactMsg = document.getElementById("contactMsg");

contactForm.addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("name").value;

contactMsg.textContent = "Thanks " + name + "! Your message was submitted.";

contactForm.reset();

});