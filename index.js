let total = document.getElementsByClassName("card-text");
console.log(total);

let isLightMode = true;

document.getElementById("modo").addEventListener("click", function() {
    if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "white";
        document.getElementById("modo").textContent = "Alternar para Modo Escuro";
        // Mudar a cor de texto para preto nos elementos <p> e <h1>
        document.querySelectorAll('p, h1').forEach(element => {
            element.style.color = "black";
        });
    }else {
        document.body.style.backgroundColor = "black";
        document.getElementById("modo").textContent = "Alternar para Modo Claro";
        //mudar a cor do texto para branco nos elementos <p> e <h1>
        document.querySelectorAll('h1').forEach(element => {

        });
    }
    //aternar a variável para a próxima cor
    isLightMode = !isLightMode;
});