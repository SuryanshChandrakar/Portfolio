// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Navbar shadow on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Scroll reveal animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('section, .project, .skills-list span').forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});

// Optional: Typing effect for intro header (needs slight CSS adjustment)
const typedText = ["Computer Science Engineer", "Problem Solver", "Developer", "Tech Enthusiast"];
let index = 0, charIndex = 0;
const typeElement = document.querySelector("header p");

function typeLoop() {
  if (!typeElement) return;
  if (charIndex < typedText[index].length) {
    typeElement.textContent += typedText[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeLoop, 100);
  } else {
    setTimeout(() => {
      typeElement.textContent = "";
      charIndex = 0;
      index = (index + 1) % typedText.length;
      typeLoop();
    }, 2000);
  }
}

if (typeElement) typeLoop();
