//the following code is for smooth scrolling: it's a little too bouncy for my liking.

// /**
//  * Adds a scroll event listener to the window that enables smooth scrolling
//  * to the closest section when the user stops scrolling. Debounces the scroll
//  * event to prevent excessive processing.
//  */
// window.addEventListener('scroll', function() {
//     // Exit early if smooth scrolling is currently disabled
//     if (!smoothScrollingEnabled) return;

//     // Clear any existing scroll timeout
//     clearTimeout(scrollTimeout);

//     // Set a timeout to debounce the scroll event
//     scrollTimeout = setTimeout(function() {
//         let targetSection = null;
//         const scrollPosition = window.scrollY;

//         // Iterate over all sections to find the target section
//         for (let i = 0; i < sections.length; i++) {
//             const section = sections[i];
//             const sectionTop = section.offsetTop;
//             const sectionHeight = section.offsetHeight;
//             // Calculate the scroll threshold as halfway through the section
//             const scrollThreshold = sectionTop + sectionHeight * 0.50; 

//             // Skip sections with no height
//             if (sectionHeight === 0) {
//                 continue;
//             }

//             // Determine the target section based on the current scroll position
//             if (scrollPosition < scrollThreshold) {
//                 targetSection = section;
//                 break; // Exit loop once the target is found
//             } else if (i === sections.length - 1) {
//                 targetSection = sections[i]; // Set last section as target if we reach the end
//                 break;
//             }
//         }

//         // Scroll the target section into view smoothly
//         if (targetSection) {
//             targetSection.scrollIntoView({ behavior: 'smooth' });

//             // Temporarily disable smooth scrolling to prevent interference during the scroll
//             smoothScrollingEnabled = false;
//             setTimeout(() => {
//                 smoothScrollingEnabled = true;
//             }, 600); // Adjust delay as needed
//         }
//     }, 80); // Set debounce delay
// });

/**
 * Handles the hiding and showing of the navigation bar when scrolling.
 * @param {Event} event The scroll event.
 */
// window.addEventListener('scroll', function(event) {
//     const currentScrollY = window.scrollY;
//     const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';

//     /**
//      * Check if we are near the top of the page
//      * @type {boolean}
//      */
//     const nearTop = currentScrollY < 60;

//     if (nearTop) {
//         return;
//     }

//     /**
//      * Hide the navigation bar if we scroll down past the first section
//      * and show it if we scroll up.
//      */
//     if (scrollDirection === 'down' && currentScrollY > sections[0].offsetTop - nav.offsetHeight) {
//         nav.classList.add('hidden');

//     } else if (scrollDirection === 'up') {
//         nav.classList.remove('hidden');

//     }

//     /**
//      * Update the last scroll position
//      * @type {number}
//      */
//     lastScrollY = currentScrollY;
// });
let lastScrollTop = 0;
const nav = document.getElementById('nav');
const sandwich = document.getElementById('sandwich');
const overlay = document.getElementById('overlay');
const body = document.body;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Use a small threshold to prevent flicker on minor scroll changes
  const threshold = 10;

  if (scrollTop > lastScrollTop + threshold && scrollTop > 60) {
    nav.classList.add('hidden');
  } else if (scrollTop < lastScrollTop - threshold ) {
    nav.classList.remove('hidden');
  }

  lastScrollTop = scrollTop;
});


sandwich.addEventListener('click', () => {
  overlay.classList.toggle('open');
  sandwich.classList.toggle('open');
  body.style.overflow = overlay.classList.contains('open') ? 'hidden' : 'auto';
});