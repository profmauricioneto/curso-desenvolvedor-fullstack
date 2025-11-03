// Botão "Mostrar mais"
const mostrarMaisBtn = document.getElementById("mostrarMaisBtn");
const extra = document.getElementById("extra");

mostrarMaisBtn.addEventListener("click", () => {
    if (extra.classList.contains("oculto")) {
        extra.classList.remove("oculto");
        mostrarMaisBtn.textContent = "Mostrar menos";
    } else {
        extra.classList.add("oculto");
        mostrarMaisBtn.textContent = "Mostrar mais";
    }
});

// Alternar entre modo claro e escuro
const temaBtn = document.getElementById("temaBtn");
let modoEscuro = false;

temaBtn.addEventListener("click", () => {
    modoEscuro = !modoEscuro;
    document.body.style.backgroundColor = modoEscuro ? "#1c1c1c" : "#f0f8ff";
    document.body.style.color = modoEscuro ? "#f0f8ff" : "#333";
    temaBtn.textContent = modoEscuro ? "Modo Claro" : "Modo Escuro";
});

document.getElementById("adicionarBtn").addEventListener("click", function () {
    const nomeProjeto = document.getElementById("nomeProjeto").value;
    const descricaoProjeto = document.getElementById("descricaoProjeto").value;

    if (nomeProjeto && descricaoProjeto) {
        const grid = document.querySelector(".projetos-grid");

        const novoCard = document.createElement("div");
        novoCard.className = "projeto-card";
        novoCard.innerHTML = `
            <h3>${nomeProjeto}</h3>
            <p class="projeto-descricao">${descricaoProjeto}</p>
            <div class="projeto-tags">
                <span class="tag">HTML</span>
                <span class="tag">CSS</span>
                <span class="tag">JavaScript</span>
            </div>
            <div class="projeto-links">
                <button class="btn-secundario">Ver Demo</button>
                <button class="btn-secundario">Código</button>
            </div>
        `;

        grid.appendChild(novoCard);

        // Limpar inputs
        document.getElementById("nomeProjeto").value = "";
        document.getElementById("descricaoProjeto").value = "";
    } else {
        alert("Por favor, preencha o nome e a descrição do projeto!");
    }
});
