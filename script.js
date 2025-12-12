// Toggle mobile menu
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");

  // Toggle menu button icon
  const menuBtn = document.querySelector(".menu-btn i");
  if (nav.classList.contains("active")) {
    menuBtn.classList.remove("fa-bars");
    menuBtn.classList.add("fa-times");
  } else {
    menuBtn.classList.remove("fa-times");
    menuBtn.classList.add("fa-bars");
  }
}

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    const nav = document.getElementById("navLinks");
    if (nav.classList.contains("active")) {
      nav.classList.remove("active");
      const menuBtn = document.querySelector(".menu-btn i");
      menuBtn.classList.remove("fa-times");
      menuBtn.classList.add("fa-bars");
    }
  });
});

// Add scroll effect to navbar
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 10px 30px rgba(139, 69, 19, 0.15)";
    navbar.style.padding = "10px 0";
  } else {
    navbar.style.boxShadow = "0 4px 20px rgba(139, 69, 19, 0.1)";
    navbar.style.padding = "15px 0";
  }
});

// Add animation to stats counter on scroll
function animateStats() {
  const statsSection = document.querySelector(".hero-stats");
  const statsPosition = statsSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (statsPosition < screenPosition) {
    const statNumbers = document.querySelectorAll(".stat-number");
    statNumbers.forEach((stat) => {
      const target = parseInt(stat.textContent);
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        stat.textContent = Math.floor(current);
      }, 30);
    });

    // Remove event listener after animation runs once
    window.removeEventListener("scroll", animateStats);
  }
}

// Initialize animations when page loads
window.addEventListener("DOMContentLoaded", () => {
  // Add scroll listener for stats animation
  window.addEventListener("scroll", animateStats);

  // Trigger stats animation if already in view
  animateStats();
});
