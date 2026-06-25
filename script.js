const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

function getRandomChar(str) {
    return str[Math.floor(Math.random() * str.length)];
}

function generatePassword() {
    const length = parseInt(document.getElementById('length').value);
    const hasUpper = document.getElementById('uppercase').checked;
    const hasLower = document.getElementById('lowercase').checked;
    const hasNumbers = document.getElementById('numbers').checked;
    const hasSymbols = document.getElementById('symbols').checked;

    let chars = "";
    if (hasLower) chars += lowercase;
    if (hasUpper) chars += uppercase;
    if (hasNumbers) chars += numbers;
    if (hasSymbols) chars += symbols;

    if (chars === "") {
        chars = lowercase;
        document.getElementById('lowercase').checked = true;
    }

    let password = "";

    if (hasUpper) password += getRandomChar(uppercase);
    if (hasLower) password += getRandomChar(lowercase);
    if (hasNumbers) password += getRandomChar(numbers);
    if (hasSymbols) password += getRandomChar(symbols);

    for (let i = password.length; i < length; i++) {
        password += getRandomChar(chars);
    }

    // Embaralhar
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    document.getElementById('password').textContent = password;
    evaluateStrength(password);
}

function evaluateStrength(password) {
    let score = 0;
    const length = password.length;

    if (length >= 8) score += 1;
    if (length >= 12) score += 2;
    if (length >= 16) score += 2;
    if (length >= 20) score += 1;

    if (/[A-Z]/.test(password)) score += 2;
    if (/[a-z]/.test(password)) score += 2;
    if (/\d/.test(password)) score += 2;
    if (/[^A-Za-z0-9]/.test(password)) score += 3;

    const bar = document.getElementById('strength-bar');
    const text = document.getElementById('strength-text');

    let width, colorClass, label;

    if (score <= 4) {
        width = "25%"; colorClass = "bg-red-500"; label = "HORRÍVEL";
    } else if (score <= 7) {
        width = "45%"; colorClass = "bg-orange-500"; label = "RUIM";
    } else if (score <= 10) {
        width = "65%"; colorClass = "bg-yellow-400"; label = "BOM";
    } else if (score <= 12) {
        width = "80%"; colorClass = "bg-emerald-400"; label = "LEGAL";
    } else if (score <= 14) {
        width = "92%"; colorClass = "bg-emerald-500"; label = "MUITO BOM";
    } else {
        width = "100%"; colorClass = "bg-violet-500"; label = "SIGMA";
    }

    bar.style.width = width;
    bar.className = `strength-bar h-full ${colorClass} rounded-3xl`;
    text.textContent = label;
}

function updateLength(value) {
    document.getElementById('length-value').textContent = value;
}

function copyPassword() {
    const passwordText = document.getElementById('password').textContent;
    
    if (passwordText === "Clique em gerar") {
        alert("Gere uma senha primeiro!");
        return;
    }

    navigator.clipboard.writeText(passwordText).then(() => {
        const copyBtn = document.querySelector('button[onclick="copyPassword()"]');
        const original = copyBtn.innerHTML;
        
        copyBtn.innerHTML = `<i class="fa-solid fa-check"></i> <span>Copiado!</span>`;
        copyBtn.style.backgroundColor = "#10b981";
        
        setTimeout(() => {
            copyBtn.innerHTML = original;
            copyBtn.style.backgroundColor = "";
        }, 2000);
    });
}

// Inicializar
window.onload = () => {
    setTimeout(() => generatePassword(), 300);
};

// Atalho Ctrl + R
document.addEventListener('keydown', (e) => {
    if (e.key === "r" && e.ctrlKey) {
        e.preventDefault();
        generatePassword();
    }
});