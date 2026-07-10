:root {
    --bg-color: #0b111e;
    --card-bg: #111a2e;
    --text-main: #ffffff;
    --text-muted: #8295b4;
    --accent-cyan: #4ff0ff;
    --accent-purple: #c37aff;
    --accent-green: #4fffaa;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: var(--bg-color);
    color: var(--text-main);
    overflow-x: hidden;
    line-height: 1.6;
    position: relative;
}

/* Эффект свечения на заднем плане */
body::before, body::after {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    filter: blur(120px);
    z-index: -1;
    opacity: 0.15;
}

body::before {
    top: 15%;
    left: 5%;
    background: var(--accent-purple);
}

body::after {
    top: 30%;
    right: 10%;
    background: var(--accent-cyan);
}

/* Навигация */
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 8%;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    background: rgba(11, 17, 30, 0.75);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.03);
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: bold;
    text-decoration: none;
    color: #fff;
    font-size: 1.1rem;
}

.logo-badge {
    background: linear-gradient(135deg, var(--accent-cyan), var(--accent-purple));
    color: #000;
    padding: 4px 10px;
    border-radius: 6px;
    font-size: 0.85rem;
}

nav ul {
    display: flex;
    list-style: none;
    gap: 25px;
}

nav a {
    color: var(--text-muted);
    text-decoration: none;
    transition: color 0.3s;
    font-size: 0.95rem;
}

nav a:hover, nav a.active {
    color: var(--accent-cyan);
}

.btn-nav {
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 8px 20px;
    border-radius: 20px;
    color: #fff;
    text-decoration: none;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.btn-nav:hover {
    border-color: var(--accent-cyan);
    color: var(--accent-cyan);
    box-shadow: 0 0 15px rgba(79, 240, 255, 0.2);
}

/* Главный экран */
.hero-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 140px 8% 60px 8%;
    gap: 40px;
}

.hero-left {
    flex: 1.1;
    max-width: 650px;
}

.status-badge {
    color: var(--accent-green);
    font-size: 0.8rem;
    letter-spacing: 2px;
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
}

.status-badge::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    background-color: var(--accent-green);
    border-radius: 50%;
    box-shadow: 0 0 8px var(--accent-green);
}

.hero-left h1 {
    font-size: 3.8rem;
    line-height: 1.15;
    margin-bottom: 20px;
    font-weight: 700;
    letter-spacing: -1px;
}

.hero-subtitle {
    color: var(--accent-cyan);
    font-size: 1.6rem;
    margin-bottom: 30px;
    font-weight: 500;
}

.hero-text {
    color: var(--text-muted);
    margin-bottom: 40px;
    font-size: 1.1rem;
    max-width: 540px;
}

.hero-buttons {
    display: flex;
    gap: 20px;
    margin-bottom: 60px;
}

.btn-primary {
    background: linear-gradient(135deg, var(--accent-cyan), #29b6f6);
    color: #000;
    padding: 14px 32px;
    border-radius: 25px;
    text-decoration: none;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 4px 20px rgba(79, 240, 255, 0.25);
    transition: transform 0.2s, box-shadow 0.2s;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(79, 240, 255, 0.35);
}

.btn-secondary {
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.03);
    color: #fff;
    padding: 14px 32px;
    border-radius: 25px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s;
}

.btn-secondary:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
}

.stats {
    display: flex;
    gap: 50px;
}

.stat-item h3 {
    font-size: 2.2rem;
    color: #fff;
    margin-bottom: 5px;
    font-weight: 600;
}

.stat-item p {
    color: var(--text-muted);
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* Правая часть — Интерактивный терминал с кодом */
.hero-right {
    flex: 0.9;
    display: flex;
    justify-content: center;
    position: relative;
}

.code-window {
    background-color: var(--card-bg);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 16px;
    width: 100%;
    max-width: 480px;
    padding: 24px;
    font-family: 'Fira Code', 'Courier New', Courier, monospace;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
    position: relative;
}

/* Декоративный кругляшок справа от окна кода (как на макете) */
.code-window::after {
    content: 'SA';
    position: absolute;
    right: -25px;
    top: 40px;
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #ff7ae6, #c37aff);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    font-weight: bold;
    font-size: 1.1rem;
    box-shadow: 0 10px 25px rgba(195, 122, 255, 0.3);
}

.window-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.dots {
    display: flex;
    gap: 8px;
}

.dot {
    width: 11px;
    height: 11px;
    border-radius: 50%;
}

.dot.red { background-color: #ff5f56; }
.dot.yellow { background-color: #ffbd2e; }
.dot.green { background-color: #27c93f; }

.file-name {
    color: var(--text-muted);
    font-size: 0.85rem;
    letter-spacing: 0.5px;
}

.code-content {
    color: #f8f8f2;
    font-size: 0.9rem;
    line-height: 1.6;
    white-space: pre-wrap;
}

.keyword { color: var(--accent-purple); }
.string { color: var(--accent-green); }
.property { color: var(--accent-cyan); }
.comment { color: var(--text-muted); font-style: italic; }

/* Скролл вниз */
.scroll-down {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    color: var(--text-muted);
    font-size: 0.75rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-weight: 500;
}

/* Адаптивность для планшетов и телефонов */
@media (max-width: 1024px) {
    .hero-section {
        flex-direction: column;
        text-align: center;
        padding-top: 160px;
        gap: 60px;
    }
    .hero-left {
        max-width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .hero-text {
        max-width: 600px;
    }
    .hero-buttons, .stats, .status-badge {
        justify-content: center;
    }
    .code-window::after {
        right: 20px;
        top: -30px;
    }
    header {
        padding: 15px 5%;
    }
    nav {
        display: none; /* Для полноценного мобильного меню обычно добавляют гамбургер */
    }
}
