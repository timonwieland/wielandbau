const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const year = document.querySelector("#year");
const form = document.querySelector(".contact-form");
const statusLine = document.querySelector(".form-status");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Menue schliessen" : "Menue oeffnen");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Menue oeffnen");
    });
  });
}

if (form && statusLine) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    statusLine.textContent = "Danke, Ihre Anfrage wurde vorbereitet.";
    form.reset();
  });
}
