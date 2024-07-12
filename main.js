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