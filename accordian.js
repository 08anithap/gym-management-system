const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', function () {
    this.classList.toggle('active');
    const content = this.nextElementSibling;
    content.classList.toggle('active');
  });
});

// JavaScript code for smooth scrolling
function smoothScroll(target) {
  const element = document.querySelector(target);
  window.scrollTo({
    top: element.offsetTop,
    behavior: 'smooth'
  });
}

