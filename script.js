let lastScrollPosition = 0;
let scrollTimeout;
let lastScrollY = window.scrollY; // Initialize outside the event listener

const sandwichMenu = document.getElementById("sandwich");
const overlay = document.getElementById("overlay");
const body = document.body;
const nav = document.getElementById('nav');
// const h1 = document.getElementById('h1');
// const p1 = document.getElementById('p1');
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');




sandwichMenu.addEventListener("click", () => {
  overlay.classList.toggle("open");
  sandwichMenu.classList.toggle("overlay-open");
  if (overlay.classList.contains("open")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "auto";
  }
});




window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const scrollDifference = scrollPosition - lastScrollPosition;
    const currentScrollY = window.scrollY; // currentscrollY inside the listener
    const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';

    const nearTop = scrollPosition < 100;

    if (nearTop) {
        return;
    }


    if (scrollDirection === 'down' && currentScrollY > section1.offsetTop - nav.offsetHeight) {
        nav.classList.add('hidden');

    } else if (scrollDirection === 'up' && currentScrollY < section2.offsetTop - nav.offsetHeight) {
        nav.classList.remove('hidden');

    }
    lastScrollY = currentScrollY; // Update lastScrollY *after* checking the conditions

    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(function() {
        let targetSection;

        if (scrollDifference > 0) { // Scrolling down
            if (scrollPosition > nav.offsetTop && scrollPosition < section1.offsetTop) {
                targetSection = section1; // Correct this line
            } else if (scrollPosition > section1.offsetTop && scrollPosition < section2.offsetTop) {
                targetSection = section2;
            } else if (scrollPosition > section2.offsetTop) { // Simplify this
                targetSection = section3;
            }
        } else { // Scrolling up
            if (scrollPosition < section1.offsetTop) {
                targetSection = nav;
            } else if (scrollPosition < section2.offsetTop) {
                targetSection = section1;
            } else if (scrollPosition < section3.offsetTop) {
                targetSection = section2;
            } else { // Simplify this
                targetSection = section3;
            }

        }


        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }

        lastScrollPosition = scrollPosition;
    }, 80); 
}); 
// working 11.5.24-12.56pm
