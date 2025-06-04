document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
        const navContainer = document.querySelector('.nav-container');
        navContainer.classList.remove('active');
    });
});

document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-container').classList.toggle('active');
});

// Counter animation
function startCounter() {
    const counters = document.querySelectorAll('.counter-value');
    const aboutSection = document.getElementById('about');
    let hasStarted = false;

    function updateCounter() {
        const aboutTop = aboutSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (aboutTop < windowHeight * 0.8 && !hasStarted) {
            hasStarted = true;
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                let count = 0;
                const increment = target / 100;

                const update = () => {
                    if (count < target) {
                        count += increment;
                        counter.innerText = Math.ceil(count) + (counter.nextSibling && counter.nextSibling.textContent === '%' ? '%' : '');
                        setTimeout(update, 20);
                    } else {
                        counter.innerText = target + (counter.nextSibling && counter.nextSibling.textContent === '%' ? '%' : '');
                    }
                };
                update();
            });
        }
    }

    window.addEventListener('scroll', updateCounter);
    updateCounter();
}

// Skills progress animation
function animateSkills() {
    const progresses = document.querySelectorAll('.progress');
    const skillsSection = document.getElementById('skills');
    let hasAnimated = false;

    function updateProgress() {
        const skillsTop = skillsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (skillsTop < windowHeight * 0.8 && !hasAnimated) {
            hasAnimated = true;
            progresses.forEach(progress => {
                const target = parseInt(progress.getAttribute('data-progress'));
                progress.style.width = `${target}%`;
            });
        }
    }

    window.addEventListener('scroll', updateProgress);
    updateProgress();
}

startCounter();
animateSkills();