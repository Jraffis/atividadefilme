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