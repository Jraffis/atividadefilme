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


function addCard() {
    // Cria um novo elemento div para representar o card
    var card = document.createElement("div");
    card.className = "cardextra";
    
    // Conteúdo do card (pode personalizar conforme necessário)
    card.innerHTML = `
    <div class="card card text-bg-dark mb-3" style="max-width: 18rem;" style="width: 18rem;">
    <img src="img/ballers.jpeg" class="card-img-top" alt="...">
    <div class="card-body">
      <h4><b>Ballers</b></h2>
        <p class="card-text">A série acompanha a vida de jogadores da Liga Nacional de Futebol Americano fora do campo.
        </p>
        <a href="https://www.youtube.com/watch?v=nk-c899v2AI" target="_blank" class="btn btn-secondary"><svg
            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-camera-reels" viewBox="0 0 16 16">
            <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0M1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
            <path
              d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm6 8.73V7.27l-3.5 1.555v4.35zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1" />
            <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6M7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
          </svg> Veja o Trailer</a>
    </div>
    `;
    
    // Adiciona o card à div container
    document.body.appendChild(card);
}