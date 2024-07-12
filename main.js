import "./assets/css/tailwind.css";

// Check if dark mode is already set in localStorage or by system preference
if (
    localStorage.getItem("color-theme") === "dark" ||
    (!localStorage.getItem("color-theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
    document.documentElement.classList.add("dark"); // Apply dark mode class to the root element
    localStorage.setItem("color-theme", "dark"); // Store dark mode preference
} else {
    // If light mode is detected, force dark mode
    document.documentElement.classList.add("dark");
    localStorage.setItem("color-theme", "dark");
}

let switchers = document.querySelectorAll(".switcher");

switchers.forEach((switcher) => {
    switcher.addEventListener("click", function () {
        // Toggle dark mode
        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("light");
            localStorage.setItem("color-theme", "dark");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("color-theme", "dark");
        }
    });
});




