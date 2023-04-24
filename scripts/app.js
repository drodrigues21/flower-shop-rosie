// Mobile Menu Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

// Open and Close Modal on the image galery
const imgItem = document.querySelectorAll('.galery__item');
const modalImg = document.querySelector('.modal-galery-container');
const closeModal = document.querySelector('.close-modal-btn');

imgItem.forEach(item => {
    item.addEventListener('click', () => {
        modalImg.classList.add('modal-active');
    });
    
});

closeModal.addEventListener('click', () => {
    modalImg.classList.remove('modal-active');
});

