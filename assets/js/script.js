// Seleciona todos os itens do álbum
const albumItems = document.querySelectorAll('.album-item');

// Adiciona um evento de clique a cada item
albumItems.forEach(item => {
    item.addEventListener('click', () => {
        // Obtém o título e a descrição do item clicado
        const title = item.querySelector('h3').textContent;
        const description = item.querySelector('p').textContent;

        // Exibe uma mensagem de alerta com informações do item
        alert(`Você clicou em: ${title}\n${description}`);
    });
});
