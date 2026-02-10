// Set footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

menuBtn.addEventListener("click", () => {
  const isOpen = mobileNav.style.display === "grid";
  mobileNav.style.display = isOpen ? "none" : "grid";
});

// Fake form submission (for assignment/demo)
const auditForm = document.getElementById("auditForm");
const formMsg = document.getElementById("formMsg");

auditForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  formMsg.textContent = `Thanks! Checklist will be sent to: ${email} (demo message).`;
  auditForm.reset();
});

const contactForm = document.getElementById("contactForm");
const contactMsg = document.getElementById("contactMsg");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  contactMsg.textContent = `Thanks, ${name}! Your message was submitted (demo).`;
  contactForm.reset();
});
