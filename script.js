function welcomeMessage() {
    alert("Welcome to my developer portfolio!");
}

welcomeMessage();

console.log("David's portfolio website is running!");

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const elements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if(position < screenHeight - 100){
            el.classList.add('show');
        }
    });
});

