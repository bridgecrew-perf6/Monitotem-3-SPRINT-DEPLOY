function abrirModal() {
    
    let modal = document.querySelector('.modal');
    let fundoModal = document.querySelector('.fundoModal')
    fundoModal.style.display = 'flex'
    
    modal.style.display = 'flex';
}

function fecharModal() {
    let modal = document.querySelector('.modal');
    modal.style.display = 'none';

    let fundoModal = document.querySelector('.fundoModal')
    fundoModal.style.display = 'none'
}




    