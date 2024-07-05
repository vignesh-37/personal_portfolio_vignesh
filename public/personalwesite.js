//Toggle menu for navigation bar when site show on mobile the nav bar items bacomes menu icon
function toggleMenu() {
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('show');
}

//The scroll event when the skill sction shown on the screen
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });
});
