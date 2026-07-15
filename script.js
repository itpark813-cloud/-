document.addEventListener('DOMContentLoaded', () => {
    
    // Получаем новый скролл-контейнер интерфейса
    const scrollContainer = document.querySelector('.scroll-container');

    // Удаление прелоадера
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
    });
    // Запасной таймаут (если load задержится)
    setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
    }, 800);

    // Движение кастомного курсора
    const cursor = document.getElementById('custom-cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    const interactiveElements = document.querySelectorAll('a, button, .glass-card, input, textarea');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
    });

    // Мобильное бургер-меню
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.querySelector('i').classList.toggle('fa-bars');
        hamburger.querySelector('i').classList.toggle('fa-times');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.querySelector('i').classList.add('fa-bars');
            hamburger.querySelector('i').classList.remove('fa-times');
        });
    });

    // Эффект печати текста
    const strings = ["Code Developer", "Reverse Engineer", "IT Student"];
    let stringIdx = 0, charIdx = 0, isDeleting = false;
    const typingTarget = document.getElementById('typing-text');

    function typeEffect() {
        let currentString = strings[stringIdx];
        if (isDeleting) {
            typingTarget.textContent = currentString.substring(0, charIdx - 1);
            charIdx--;
        } else {
            typingTarget.textContent = currentString.substring(0, charIdx + 1);
            charIdx++;
        }

        let speed = isDeleting ? 40 : 100;

        if (!isDeleting && charIdx === currentString.length) {
            speed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            stringIdx = (stringIdx + 1) % strings.length;
            speed = 500;
        }

        setTimeout(typeEffect, speed);
    }
    typeEffect();

    // Логика скролла, индикатор прогресса, подсветка активных ссылок
    const header = document.getElementById('header');
    const backToTop = document.getElementById('back-to-top');
    const progressBar = document.getElementById('scroll-progress');
    const sections = document.querySelectorAll('section');

    // Наблюдаем за прокруткой нового контейнера-интерфейса
    scrollContainer.addEventListener('scroll', () => {
        let currentScroll = scrollContainer.scrollTop;
        let totalHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
        
        if (currentScroll > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');

        if (currentScroll > 400) backToTop.classList.add('show');
        else backToTop.classList.remove('show');

        if (totalHeight > 0) {
            progressBar.style.width = (currentScroll / totalHeight) * 100 + '%';
        }

        let currentSectionId = "";
        sections.forEach(sec => {
            const sectionTop = sec.offsetTop - 120;
            if (currentScroll >= sectionTop) {
                currentSectionId = sec.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    backToTop.addEventListener('click', () => {
        scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Плавный скролл по якорным ссылкам меню внутри скролл-контейнера
    document.querySelectorAll('.nav-menu a, .hero-buttons a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    scrollContainer.scrollTo({
                        top: targetSection.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Анимация шкал навыков и счетчиков чисел
    const reveals = document.querySelectorAll('.reveal');
    
    function runOnIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                const counters = entry.target.querySelectorAll('.counter');
                counters.forEach(counter => {
                    if (!counter.classList.contains('counted')) {
                        counter.classList.add('counted');
                        const target = +counter.getAttribute('data-target');
                        let count = 0;
                        const updateCount = () => {
                            const increment = target / 40;
                            if (count < target) {
                                count += increment;
                                counter.innerText = Math.ceil(count);
                                setTimeout(updateCount, 20);
                            } else {
                                counter.innerText = target;
                            }
                        };
                        updateCount();
                    }
                });

                const progressBars = entry.target.querySelectorAll('.skill-progress');
                progressBars.forEach(bar => {
                    bar.style.width = bar.getAttribute('data-width');
                });

                observer.unobserve(entry.target);
            }
        });
    }

    // Для корректной работы IntersectionObserver на мобильных скроллим контейнер
    const revealObserver = new IntersectionObserver(runOnIntersection, { 
        root: scrollContainer,
        threshold: 0.1 
    });
    reveals.forEach(rev => revealObserver.observe(rev));

    // Легковесные нативные фоновые частицы
    const canvas = document.getElementById('particles-js');
    const ctx = canvas.getContext('2d');
    let particlesArray = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = Math.random() * 0.3 - 0.15;
            this.speedY = Math.random() * 0.3 - 0.15;
            this.alpha = Math.random() * 0.5 + 0.2;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x > canvas.width) this.x = 0;
            else if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            else if (this.y < 0) this.y = canvas.height;
        }
        draw() {
            ctx.fillStyle = `rgba(168, 85, 247, ${this.alpha})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function initParticles() {
        particlesArray = [];
        let count = Math.min(Math.floor(window.innerWidth / 20), 60);
        for (let i = 0; i < count; i++) {
            particlesArray.push(new Particle());
        }
    }
    initParticles();

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particlesArray.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animateParticles);
    }
    animateParticles();
});
