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
  if (!document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.add("dark");
  }
  localStorage.setItem("color-theme", "dark");
}

// Always set the website to dark mode and store this preference in localStorage
enforceDarkMode();

// Select all elements with the class "switcher"
let switchers = document.querySelectorAll(".switcher");

// Add event listeners to all switchers to enforce dark mode and allow other button functionality
switchers.forEach((switcher) => {
  switcher.addEventListener("click", function (event) {
    // Enforce dark mode on click, but do not prevent default to allow other button functionality
    enforceDarkMode();
  });
});

// Listen for changes in the user's system preferences and enforce dark mode
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", enforceDarkMode);
window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", enforceDarkMode);

// Use a MutationObserver to ensure dark mode is enforced even if any script tries to change it
const observer = new MutationObserver(() => {
  enforceDarkMode();
});

// Start observing the documentElement for attribute changes
observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });


