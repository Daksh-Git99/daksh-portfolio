// Small reveal animation — keeps the page lightweight and framework-free.
const items = document.querySelectorAll('.section, .project, .timeline-item, .edu-card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
items.forEach(item => {
  item.classList.add('reveal');
  observer.observe(item);
});
