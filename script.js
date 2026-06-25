const senha = document.getElementById("senha");
const fill = document.getElementById("fill");
const statusText = document.getElementById("status");

senha.addEventListener("input", () => {
    const valor = senha.value;
    let score = 0;

    if(valor.length >= 6) score++;
    if(valor.length >= 8) score++;
    if(/[A-Z]/.test(valor)) score++;
    if(/[0-9]/.test(valor)) score++;
    if(/[^A-Za-z0-9]/.test(valor)) score++;

    switch(score){
        case 0:
        case 1:
            fill.style.width = "16%";
            fill.style.background = "#dc2626";
            statusText.textContent = "💀 Horrível";
            break;

        case 2:
            fill.style.width = "33%";
            fill.style.background = "#f97316";
            statusText.textContent = "😕 Ruim";
            break;

        case 3:
            fill.style.width = "50%";
            fill.style.background = "#eab308";
            statusText.textContent = "🙂 Bom";
            break;

        case 4:
            fill.style.width = "66%";
            fill.style.background = "#22c55e";
            statusText.textContent = "😎 Legal";
            break;

        case 5:
            fill.style.width = "83%";
            fill.style.background = "#3b82f6";
            statusText.textContent = "🚀 Muito Bom";
            break;

        default:
            fill.style.width = "100%";
            fill.style.background = "#a855f7";
            statusText.textContent = "🗿 SIGMA";
    }

    if(valor.length >= 20 &&
       /[A-Z]/.test(valor) &&
       /[0-9]/.test(valor) &&
       /[^A-Za-z0-9]/.test(valor)){
        fill.style.width = "100%";
        fill.style.background =
            "linear-gradient(90deg,#a855f7,#ec4899,#06b6d4)";
        statusText.textContent = "🗿 SIGMA";
    }
});