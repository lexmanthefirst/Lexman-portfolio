"use strict";
const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");
const nav = document.querySelectorAll(".nav_text");

const navItems = [nav1, nav2, nav3, nav4, nav5];

//Control Navigation Animation
function navAnimation(direction1, direction2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(
      `slide-${direction1}-${i + 1}`,
      `slide-${direction2}-${i + 1}`
    );
  });
}

function toggleNav() {
  //Toogle: Menu Bars Open/Close
  menuBars.classList.toggle("change");
  //Toggle: Menu active
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    //Animate in-OVerlay
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
    //Animate in - Nav Items
    navAnimation("out", "in");
  } else {
    //Animate Out-overlay
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
    //Animate Out - Nav Items
    navAnimation("in", "out");
  }
}
//Event Listeners
menuBars.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener("click", toggleNav);
});

// Close menu when clicking outside of it
window.addEventListener("click", function (event) {
  if (!event.target.matches("#menu-bars")) {
    if (overlay.classList.contains("overlay-active")) {
      toggleNav();
    }
  }
});


const navArr = Array.from(nav); // Update selector to match your nav items

let selectedNav = null;

navArr.forEach((nav) => {
  nav.addEventListener("click", function () {
    if (selectedNav !== null) {
      selectedNav.style.color = "";
      selectedNav.style.filter = "";
    }
    nav.style.color = "var(--nav-active-color)";
    nav.style.filter = "var(--nav-active-shadow)";
    selectedNav = nav;
  });
});

const darkMode = () => {
  const themeBtn = document.getElementById("theme-btn");
  const root = document.documentElement;

  function setTheme(theme) {
    root.dataset.theme = theme;
    localStorage.setItem("theme", theme);

    // Update button icon with proper stroke color
    themeBtn.innerHTML =
      theme === "dark"
        ?` <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--nav-active-color)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-moon"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>`
        : ` <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--nav-active-color)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-sun"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>`;

    // Update selected nav color when theme changes
    if (selectedNav) {
      selectedNav.style.color = "var(--nav-active-color)";
    }
  }

  function toggleTheme() {
    const newTheme = root.dataset.theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  });

  themeBtn.addEventListener("click", toggleTheme);
};

darkMode();

let lastScroll = window.scrollY;
const header = document.getElementById("nav-container");
const headerHeight = header.clientHeight;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  
  if (currentScroll <= 0) {
    header.classList.remove("sticky");
    return;
  }

  if (currentScroll > lastScroll && currentScroll > headerHeight) {
    header.classList.add("sticky"); // Hide header when scrolling down
  } else if (currentScroll < lastScroll) {
    header.classList.remove("sticky"); // Show header when scrolling up
  }

  lastScroll = currentScroll;
});
