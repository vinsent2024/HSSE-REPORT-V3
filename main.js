import "./assets/css/tailwind.css";

//let switchers = document.querySelectorAll(".switcher");
//if (
 // localStorage.getItem("color-theme") === "dark" ||
 // (!("color-theme" in localStorage) &&
  //  window.matchMedia("(prefers-color-scheme: dark)").matches)
//) {
//document.documentElement.classList.add("dark");
//} else {
 // document.documentElement.classList.remove("dark");
//}

//switchers.forEach((switcher) => {
  //switcher.addEventListener("click", function () {
   // if (localStorage.getItem("color-theme")) {
     // if (localStorage.getItem("color-theme") === "light") {
    //    document.documentElement.classList.add("dark");
     //   localStorage.setItem("color-theme", "dark");
    //  } else {
//        document.documentElement.classList.remove("dark");
  //      localStorage.setItem("color-theme", "light");
    //  }
//    } else {
  //    if (document.documentElement.classList.contains("dark")) {
    //    document.documentElement.classList.remove("dark");
      //  localStorage.setItem("color-theme", "light");
//      } else {
  //      document.documentElement.classList.add("dark");
    //    localStorage.setItem("color-theme", "dark");
//      }
 //   }
 // });
//});


// Function to enforce dark mode
function enforceDarkMode() {
  document.documentElement.classList.add("dark");
  localStorage.setItem("color-theme", "dark");
}

// Always set the website to dark mode and store this preference in localStorage
enforceDarkMode();

// Select all elements with the class "switcher"
let switchers = document.querySelectorAll(".switcher");

// Add event listeners to all switchers
switchers.forEach((switcher) => {
  switcher.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default action
    enforceDarkMode(); // Enforce dark mode on click
  });
});

// MutationObserver to monitor and enforce dark mode
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.attributeName === "class") {
      enforceDarkMode();
    }
  });
});

// Start observing the documentElement for attribute changes
observer.observe(document.documentElement, { attributes: true });

// Override any system color scheme changes
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", enforceDarkMode);
window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", enforceDarkMode);

