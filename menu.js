const burguer = document.querySelector('#burguer');
    const menu = document.querySelector('.menu');

    burguer.addEventListener('click', function(){
        menu.classList.toggle('ativo');

        // Verifica se o menu está ativo e alterna as classes do ícone correspondente
        if (menu.classList.contains('ativo')) {
            burguer.classList.replace('fa-bars', 'fa-x'); // Altera as classes do ícone para fechar
        } else {
            burguer.classList.replace('fa-x', 'fa-bars'); // Altera as classes do ícone para abrir
        }
    })