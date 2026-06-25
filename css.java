@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap');

:root {
    --primary: 139 92 246;
}

body {
    font-family: 'Inter', system-ui, sans-serif;
    background-color: #09090b;
    color: white;
    min-height: 100vh;
}

.title-font {
    font-family: 'Space Grotesk', sans-serif;
}

.password-display {
    font-family: 'Space Grotesk', monospace;
    letter-spacing: 3px;
    font-size: 1.75rem;
}

.strength-bar {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}