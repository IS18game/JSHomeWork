document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slider__item');
    const prevButton = document.querySelector('.slider__arrow_prev');
    const nextButton = document.querySelector('.slider__arrow_next');
    const dots = document.querySelectorAll('.slider__dot');
    let currentIndex = 0;
  
    function showSlide(index) {
      slides.forEach((slide, idx) => {
        slide.classList.toggle('slider__item_active', idx === index);
        if (dots[idx]) {
          dots[idx].classList.toggle('slider__dot_active', idx === index);
        }
      });
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }
  
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
  
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
      });
    });
  
    showSlide(currentIndex);
  });
  