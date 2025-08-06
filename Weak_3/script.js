// Toggle dark mode
document.getElementById("toggle-theme").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Toggle menu (mobile)
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Character counter for textarea
const messageBox = document.getElementById("message");
const charCount = document.getElementById("char-count");

messageBox.addEventListener("input", () => {
  const remaining = 200 - messageBox.value.length;
  charCount.textContent = remaining;
});

// Filter projects
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");

    projectCards.forEach((card) => {
      if (category === "all" || card.getAttribute("data-category") === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Simple form validation
document.getElementById("contact-form").addEventListener("submit", function (e) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    e.preventDefault();
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    alert("Please enter a valid email address.");
    e.preventDefault();
  } else {
    alert("Form submitted successfully!");
  }
});
