'use strict';

// DOM Elements
const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const nav = document.querySelectorAll('.nav_text');
const navItems = [nav1, nav2, nav3, nav4];
const navArr = Array.from(nav);
const header = document.getElementById('nav-container');
const headerHeight = header.clientHeight;
const btns = document.querySelectorAll('.btn');
const resumeWrapper = document.querySelector('.tech-stack-wrapper');
const contents = document.querySelectorAll('.content');
const scrollUpBtn = document.querySelector('.arrow-up');

// Scroll to top button functionality
function toggleScrollUpBtn() {
  if (window.scrollY > 100) {
    scrollUpBtn.classList.add('visible');
  } else {
    scrollUpBtn.classList.remove('visible');
  }
}
toggleScrollUpBtn();
window.addEventListener('scroll', toggleScrollUpBtn);
scrollUpBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// Variables
let lastScroll = window.scrollY;
let selectedNav = null;

/**
 * Controls navigation animation
 * @param {string} direction1 - Initial direction
 * @param {string} direction2 - Target direction
 */
function navAnimation(direction1, direction2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(
      `slide-${direction1}-${i + 1}`,
      `slide-${direction2}-${i + 1}`,
    );
  });
}

/**
 * Toggles navigation menu
 */
function toggleNav() {
  // Toggle: Menu Bars Open/Close
  menuBars.classList.toggle('change');
  // Toggle: Menu active
  overlay.classList.toggle('overlay-active');

  if (overlay.classList.contains('overlay-active')) {
    // Animate in - Overlay
    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
    // Animate in - Nav Items
    navAnimation('out', 'in');
  } else {
    // Animate Out - Overlay
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
    // Animate Out - Nav Items
    navAnimation('in', 'out');
  }
}

/**
 * Prevents default scroll behavior
 * @param {Event} e - Event object
 */
function preventScroll(e) {
  e.preventDefault();
}

/**
 * Disables scrolling
 */
function disableScroll() {
  document.body.style.overflow = 'hidden';
  document.addEventListener('wheel', preventScroll, { passive: false });
  document.addEventListener('touchmove', preventScroll, { passive: false });
}

/**
 * Enables scrolling
 */
function enableScroll() {
  document.body.style.overflow = '';
  document.removeEventListener('wheel', preventScroll);
  document.removeEventListener('touchmove', preventScroll);
}

/**
 * Initializes dark mode functionality
 */
const darkMode = () => {
  const themeBtn = document.getElementById('theme-btn');
  const root = document.documentElement;

  /**
   * Sets the theme
   * @param {string} theme - Theme to set ('light' or 'dark')
   */
  function setTheme(theme) {
    root.dataset.theme = theme;
    localStorage.setItem('theme', theme);

    // Update button icon with proper stroke color
    themeBtn.innerHTML =
      theme === 'dark'
        ? `<svg
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
        </svg>`
        : `<svg
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
        </svg>`;

    // Update selected nav color when theme changes
    if (selectedNav) {
      selectedNav.style.color = 'var(--nav-active-color)';
    }
  }

  /**
   * Toggles between light and dark themes
   */
  function toggleTheme() {
    const newTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }

  // Initialize theme on page load
  document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  });

  // Add event listener for theme toggle
  themeBtn.addEventListener('click', toggleTheme);
};

// Event Listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach(nav => {
  nav.addEventListener('click', toggleNav);
});

// Close menu when clicking outside of it
window.addEventListener('click', function (event) {
  if (!event.target.matches('#menu-bars')) {
    if (overlay.classList.contains('overlay-active')) {
      toggleNav();
    }
  }
});

// Handle navigation item selection
navArr.forEach(nav => {
  nav.addEventListener('click', function () {
    if (selectedNav !== null) {
      selectedNav.style.color = '';
      selectedNav.style.filter = '';
    }
    nav.style.color = 'var(--nav-active-color)';
    nav.style.filter = 'var(--nav-active-shadow)';
    selectedNav = nav;
  });
});

// Handle scroll events for header
window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (currentScroll <= 0) {
    header.classList.remove('sticky');
    return;
  }

  if (currentScroll > lastScroll && currentScroll > headerHeight) {
    header.classList.add('sticky'); // Hide header when scrolling down
  } else if (currentScroll < lastScroll) {
    header.classList.remove('sticky'); // Show header when scrolling up
  }

  lastScroll = currentScroll;
});

// Toggle scrolling based on overlay state
overlay.addEventListener('transitionend', () => {
  if (overlay.classList.contains('overlay-active')) {
    disableScroll();
  } else {
    enableScroll();
  }
});

// Handle resume section tab switching
resumeWrapper.addEventListener('click', function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // Remove active from other buttons
    btns.forEach(btn => {
      btn.classList.remove('active');
    });

    // Add active to clicked button
    e.target.classList.add('active');

    // Hide other contents
    contents.forEach(content => {
      content.classList.remove('active');
    });

    // Show selected content
    const element = document.getElementById(id);
    element.classList.add('active');
  }
});

// Initialize marquee
const initMarquee = () => {
  const root = document.documentElement;
  const marqueeContent = document.querySelector('ul.marquee-content');

  if (marqueeContent) {
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
      '--marquee-elements-displayed',
    );

    root.style.setProperty(
      '--marquee-elements',
      marqueeContent.children.length,
    );

    // Clone elements for seamless scrolling
    for (let i = 0; i < marqueeElementsDisplayed; i++) {
      marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }
  }
};

// Initialize dark mode
darkMode();

// Initialize marquee when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initMarquee();
});

// Project Carousel Functionality
function initCarousel() {
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.carousel-dot');
  const prevButton = document.querySelector('.carousel-button.prev');
  const nextButton = document.querySelector('.carousel-button.next');

  let currentIndex = 0;
  const slideCount = slides.length;

  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update dots
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateCarousel();
  }

  // Event Listeners
  if (prevButton) prevButton.addEventListener('click', prevSlide);
  if (nextButton) nextButton.addEventListener('click', nextSlide);

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel();
    });
  });

  // Auto-advance slides every 5 seconds
  let autoAdvance = setInterval(nextSlide, 5000);

  // Pause auto-advance when hovering over carousel
  const carousel = document.querySelector('.carousel');
  if (carousel) {
    carousel.addEventListener('mouseenter', () => clearInterval(autoAdvance));
    carousel.addEventListener('mouseleave', () => {
      autoAdvance = setInterval(nextSlide, 5000);
    });
  }

  // Initialize carousel
  updateCarousel();
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', initCarousel);

//Email copy to clipboard notification
const copyBtn = document.getElementById('copyBtn');
const email = document.getElementById('email');
const toast = document.getElementById('toast');

copyBtn.addEventListener('click', () => {
  const emailText = email.textContent;

  navigator.clipboard.writeText(emailText).then(() => {
    //Show the toast
    toast.classList.add('show');
    //Hide the toast after 2 secs
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2000);
  });
});
