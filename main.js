import "./assets/css/tailwind.css";

// Always set the website to dark mode
document.documentElement.classList.add("dark");
localStorage.setItem("color-theme", "dark");

// Add event listeners to all switchers to ensure they keep the dark mode
let switchers = document.querySelectorAll(".switcher");
switchers.forEach((switcher) => {
  switcher.addEventListener("click", function () {
    // Force the dark mode on click
    document.documentElement.classList.add("dark");
    localStorage.setItem("color-theme", "dark");
  });
});
