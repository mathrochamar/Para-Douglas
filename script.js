document.addEventListener('DOMContentLoaded', function() {
    const pagina1 = document.getElementById('pagina1');
    const pagina2 = document.getElementById('pagina2');
    const pagina3 = document.getElementById('pagina3');
    const pagina4 = document.getElementById('pagina4');
    const pagina5 = document.getElementById('pagina5');

    const botaoPagina1 = document.getElementById('botao-pagina1');
    const baloesPagina2 = document.querySelectorAll('#pagina2 .balao');

    let balaoAtualIndex = 0;

    function mostrarPagina(pagina) {
        document.querySelectorAll('.pagina').forEach(p => p.classList.remove('ativa'));
        pagina.classList.add('ativa');
    }

    botaoPagina1.addEventListener('click', function() {
        mostrarPagina(pagina2);
    });

    baloesPagina2.forEach((balao, index) => {
        if (index > 0) {
            balao.style.display = 'none'; // Esconde os balões seguintes inicialmente
        }
        balao.addEventListener('click', function() {
            if (index < baloesPagina2.length - 1) {
                baloesPagina2[index + 1].style.display = 'block'; // Mostra o próximo balão
            } else {
                mostrarPagina(pagina3); // Se for o último balão, vai para a página da foto
            }
        });
    });

    // Após a página da foto (você pode adicionar um clique na foto ou um botão)
    pagina3.addEventListener('click', function() {
        mostrarPagina(pagina4);
    });

    // Após a página do livro (você pode adicionar um clique no texto ou um botão)
    pagina4.addEventListener('click', function() {
        mostrarPagina(pagina5);
    });
});