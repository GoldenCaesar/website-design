// *** Replace your old JS with this code ***
let scrollTimeout;
let smoothScrollingEnabled = true;

const sections = document.querySelectorAll('section');
const nav = document.getElementById('nav');

window.addEventListener('scroll', function() {
    if (!smoothScrollingEnabled) return;

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function() {
        let targetSection = null;
        const scrollPosition = window.scrollY;

        for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const scrollThreshold = sectionTop + sectionHeight * 0.5;

            //If any section has no height move to next section.
            if(sectionHeight === 0){
                continue;
            }


            if (scrollPosition < scrollThreshold) {
                targetSection = section;
                break; // Found target, exit loop early
            } else if( i === sections.length - 1){
                targetSection = sections[i]; // Reached the last section
                break;
            }
        }

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
            smoothScrollingEnabled = false;
            setTimeout(() => {
                smoothScrollingEnabled = true;
            }, 600); // Adjust delay as needed
        }
    }, 80);
});



window.addEventListener('scroll', function() {
    const currentScrollY = window.scrollY;
    const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';


    const nearTop = currentScrollY < 100;

    if (nearTop) {
        return;
    }


    if (scrollDirection === 'down' && currentScrollY > sections[0].offsetTop - nav.offsetHeight) {
        nav.classList.add('hidden');

    } else if (scrollDirection === 'up') {
        nav.classList.remove('hidden');

    }

    lastScrollY = currentScrollY;
});