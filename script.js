
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('a[href="#about"]').addEventListener('click', function(e) {
        e.preventDefault(); 
        const targetElement = document.getElementById('about');
        const offsetTop = targetElement.offsetTop;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});


