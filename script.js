const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const contactForm = document.querySelector("#contact-form");
const formNote = document.querySelector("#form-note");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const project = String(formData.get("project") || "").trim();
    const budget = String(formData.get("budget") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = encodeURIComponent(`Portfolio enquiry: ${project}`);
    const body = encodeURIComponent(
      `Hi Thiruvarasan,\n\n${message}\n\nName: ${name}\nReply email: ${email}\nProject type: ${project}\nBudget / scope: ${budget || "Not specified"}`
    );

    if (formNote) {
      formNote.textContent = "Opening your email app with a draft. Review it and press Send in your email app.";
    }

    window.location.href = `mailto:sgthiruvarasan@gmail.com?subject=${subject}&body=${body}`;
  });
}
