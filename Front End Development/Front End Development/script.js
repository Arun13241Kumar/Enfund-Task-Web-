// Function to toggle the left menu
function toggleMenu() {
    const menu = document.getElementById('left-menu');
    menu.classList.toggle('collapsed');
}

// Function to dynamically shrink the page based on screen width
function resizePage() {
    const width = window.innerWidth;

    if (width >= 992 && width <= 1600) {
        document.body.style.transform = "scale(0.9)";
    } else if (width >= 700 && width < 992) {
        document.body.style.transform = "scale(0.8)";
    } else if (width >= 600 && width < 700) {
        document.body.style.transform = "scale(0.75)";
    } else if (width <= 600) {
        document.body.style.transform = "scale(0.5)";
    } else {
        document.body.style.transform = "scale(1)";
    }
}

// Listen for window resize to adjust page size dynamically
window.addEventListener('resize', resizePage);

// Initial call to set the page size
resizePage();
