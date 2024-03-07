function changeBackgroundColor() {
    var body = document.body;
    // Verifica se o fundo é cinza
    if (body.style.backgroundColor === "rgb(204, 204, 204)") {
        // Muda para preto
        body.style.backgroundColor = "#000";
    } else {
        // Caso contrário, muda de volta para cinza
        body.style.backgroundColor = "#ccc";
    }
}