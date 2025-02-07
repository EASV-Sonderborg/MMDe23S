document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".project-section, .about-me");

  const options = {
    root: null,
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-section");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });
});

// Select the scroll indicator
const scrollIndicator = document.querySelector(".scroll-indicator");

// Function to hide the indicator on scroll
function hideScrollIndicator() {
  if (window.scrollY > 50) {
    // Check if the user has scrolled more than 50px
    scrollIndicator.classList.add("hidden");
  } else {
    scrollIndicator.classList.remove("hidden");
  }
}

// Add scroll event listener
window.addEventListener("scroll", hideScrollIndicator);

// Optionally, hide the indicator on click to simulate scrolling
scrollIndicator.addEventListener("click", () => {
  scrollIndicator.classList.add("hidden");
});
