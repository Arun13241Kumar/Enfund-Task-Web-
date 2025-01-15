function adjustPageSize() {
    const width = window.innerWidth;
    const scaleFactor = width > 1600 ? 1 :
                        width >= 992 ? 0.9 :
                        width >= 700 ? 0.8 :
                        width >= 600 ? 0.75 : 0.5;
    document.body.style.transform = `scale(${scaleFactor})`;
    document.body.style.transformOrigin = 'top left';
}

window.addEventListener('resize', adjustPageSize);
window.addEventListener('DOMContentLoaded', adjustPageSize);
