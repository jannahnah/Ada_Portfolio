const toggleBtn = document.getElementById("theme-toggle");
const root = document.documentElement;
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
  toggleBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";
}

toggleBtn.addEventListener("click", () => {
  const currentTheme = root.getAttribute("data-theme");

  if (currentTheme === "dark") {
    root.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙";
  } else {
    root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️";
  }
});

if (!navLinks || !navToggle) {
  console.error("Navigation elements not found");
}

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  navToggle.textContent = navLinks.classList.contains("active") ? "✕" : "☰";
});

// Close menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
