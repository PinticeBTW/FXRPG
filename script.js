
document.getElementById("abrir-ficha").addEventListener("click", () => {
    document.getElementById("modal").style.display = "flex";
    carregarFicha();
});

function alterarPericia(nome, valor) {
    const el = document.getElementById(nome + "-valor");
    let atual = parseInt(el.innerText);
    atual += valor;
    el.innerText = atual;
    guardarFicha();
}

function guardarFicha() {
    const ficha = {
        nome: document.getElementById("nome").value,
        idade: document.getElementById("idade").value,
        sexo: document.getElementById("sexo").value,
        agi: document.getElementById("agi").value,
        acrobacia: parseInt(document.getElementById("acrobacia-valor").innerText)
    };
    localStorage.setItem("fichaVigilante", JSON.stringify(ficha));
}

function carregarFicha() {
    const ficha = JSON.parse(localStorage.getItem("fichaVigilante"));
    if (!ficha) return;
    document.getElementById("nome").value = ficha.nome;
    document.getElementById("idade").value = ficha.idade;
    document.getElementById("sexo").value = ficha.sexo;
    document.getElementById("agi").value = ficha.agi;
    document.getElementById("acrobacia-valor").innerText = ficha.acrobacia;
}
