document.getElementById("meuP").textContent = "novo conteudo";

document.getElementById("ola").style.backgroundColor = "red";


// Mudar cor de fundo da página
var corAtual = "preto";

function mudarCorDeFundo() {
    if (corAtual === "preto") {
        document.body.style.backgroundColor = "gray";
        corAtual = "cinza";
    } else {
        document.body.style.backgroundColor = "black";
        corAtual = "preto";
    }
}



// Teste
let titulo = document.getElementById("titulo");
console.log(titulo);

let isLightMode = true;

document.getElementById("modo").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        document.getElementById("modo").textContent = "Alternar para Modo Claro";
        document.querySelectorAll('p').forEach(element => {
            element.style.color = "white";
        });
    } else {
        document.getElementById("modo").textContent = "Alternar para Modo Escuro";
        document.querySelectorAll('p').forEach(element => {
            element.style.color = "black";
        });
    }

    // You can still use the isLightMode variable if needed
    isLightMode = !isLightMode;
});