let lastScrollPosition = 0;
let scrollTimeout; // Add a variable to store the timeout

window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  const scrollDifference = scrollPosition - lastScrollPosition;

  // Clear any existing timeout to prevent multiple scroll animations
  clearTimeout(scrollTimeout);

  // Debounce the scroll event
  scrollTimeout = setTimeout(function() {
    // Get the section elements
    const h1 = document.getElementById('h1');
    const section1 = document.getElementById('section1');
    const section2 = document.getElementById('section2');
    const section3 = document.getElementById('section3');


    let targetSection; // Variable to store the target section

    if (scrollDifference > 0) { // Scrolling down
      if (scrollPosition > h1.offsetTop && scrollPosition < section1.offsetTop) {
        targetSection = section1;
      } else if (scrollPosition > section1.offsetTop && scrollPosition < section2.offsetTop) {
        targetSection = section2;
      } else if (scrollPosition > section2.offsetTop && scrollPosition < section3.offsetTop) {
        targetSection = section3;
      }
    } else { // Scrolling up
      if (scrollPosition < section1.offsetTop) {
        targetSection = h1; // Scroll to h1 when at the top
      } else if (scrollPosition > section1.offsetTop && scrollPosition < section2.offsetTop) {
        targetSection = section1;
      } else if (scrollPosition > section2.offsetTop && scrollPosition < section3.offsetTop) {
        targetSection = section2;
      } else if (scrollPosition >= section3.offsetTop) {
         targetSection = section3; // Stay at section3 when at the bottom
      }
    }

    if (targetSection) {  // Only scroll if a targetSection is determined
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }


    lastScrollPosition = scrollPosition;
  }, 100); // Adjust the timeout delay (100ms) as needed
});