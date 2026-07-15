const header = document.getElementById("header");
const scrollProgress = document.getElementById("scrollProgress");
const toTop = document.getElementById("toTop");
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");
const revealElements = document.querySelectorAll(".reveal");
const typingText = document.getElementById("typingText");

const typingStrings = [
  "Создаю сайты.",
  "Делаю портфолио.",
  "Люблю чистый код.",
  "Учусь и развиваюсь."
];

let stringIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const current = typingStrings[stringIndex];

  if (!deleting) {
    charIndex++;
    typingText.textContent = current.slice(0, charIndex);
  } else {
    charIndex--;
    typingText.textContent = current.slice(0, charIndex);
  }

  let speed = deleting ? 45 : 85;

  if (!deleting && charIndex === current.length) {
    deleting = true;
    speed = 1400;
  } else if (deleting && charIndex === 0) {
    deleting = false;
    stringIndex = (stringIndex + 1) % typingStrings.length;
    speed = 250;
  }

  setTimeout(typeLoop, speed);
}

typeLoop();

function updateScrollUI() {
  const scrollTop = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const progress = height > 0 ? (scrollTop / height) * 100 : 0;

  scrollProgress.style.width = `${progress}%`;

  if (scrollTop > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  if (scrollTop > 350) {
    toTop.classList.add("show");
  } else {
    toTop.classList.remove("show");
  }
}

window.addEventListener("scroll", updateScrollUI);
updateScrollUI();

toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealElements.forEach((el) => observer.observe(el));
