/* =========================================================
   Dinakaran A — Portfolio (Dark / Bento)  |  script.js
   ========================================================= */

// Reveal cells as they scroll into view.
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.rv').forEach((el) => observer.observe(el));

// Cursor-following spotlight glow on each bento cell.
document.querySelectorAll('.cell').forEach((card) => {
  card.addEventListener('pointermove', (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
    card.style.setProperty('--my', (e.clientY - rect.top) + 'px');
  });
});
