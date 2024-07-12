import "./assets/css/tailwind.css";

let switchers = document.querySelectorAll(".switcher");
if (
 localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.add("dark");
}

switchers.forEach((switcher) => {
  switcher.addEventListener("click", function () {
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "dark") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
       document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
      }
        } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.dark("dark");
      localStorage.setItem("color-theme", "dark");
     } else {
      document.documentElement.classList.add("dark");
       localStorage.setItem("color-theme", "dark");
     }
 }
 });
 });



