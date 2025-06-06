const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.getElementById('prev-testimonial');
const nextBtn = document.getElementById('next-testimonial');

let currentIndex = 0;
let interval = null;

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.toggle('active', i === index);
  });
  currentIndex = index;
}

function nextTestimonial() {
  const nextIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(nextIndex);
}

function prevTestimonial() {
  const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(prevIndex);
}

prevBtn.addEventListener('click', () => {
  prevTestimonial();
  resetInterval();
});

nextBtn.addEventListener('click', () => {
  nextTestimonial();
  resetInterval();
});

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(nextTestimonial, 5000);
}

// Initialize
showTestimonial(currentIndex);
interval = setInterval(nextTestimonial, 5000);
