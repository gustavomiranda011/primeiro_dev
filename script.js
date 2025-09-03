// Alternar tema escuro/claro
const temaBtn = document.getElementById('tema-btn');
const body = document.body;

const temaPreferido = localStorage.getItem('tema') || 'claro';
body.setAttribute('data-tema', temaPreferido);
if(temaBtn) {
    temaBtn.textContent = temaPreferido === 'claro' ? 'Alternar Tema Escuro' : 'Alternar Tema Claro';
    temaBtn.addEventListener('click', () => {
        const temaAtual = body.getAttribute('data-tema');
        const novoTema = temaAtual === 'claro' ? 'escuro' : 'claro';
        body.setAttribute('data-tema', novoTema);
        localStorage.setItem('tema', novoTema);
        temaBtn.textContent = novoTema === 'claro' ? 'Alternar Tema Escuro' : 'Alternar Tema Claro';
    });
}

// Formulário de contato
const formContato = document.getElementById('form-contato');
if (formContato) {
    formContato.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
        formContato.reset();
    });
}

// Modal de projetos
const projetos = document.querySelectorAll('.projeto');
projetos.forEach(projeto => {
    projeto.addEventListener('mouseenter', () => {
        projeto.style.transform = 'translateY(-5px)';
        projeto.style.transition = 'transform 0.3s';
    });
    projeto.addEventListener('mouseleave', () => {
        projeto.style.transform = 'translateY(0)';
    });
});

function redirecionar(url, nomeProjeto) {
    const modal = document.getElementById('modalRedirecionamento');
    const nomeProjetoElemento = document.getElementById('nomeProjeto');
    const contadorElemento = document.getElementById('contador');
    const urlDestinoElemento = document.getElementById('urlDestino');
    const btnCancelar = document.getElementById('btnCancelar');
    const btnIrAgora = document.getElementById('btnIrAgora');

    nomeProjetoElemento.textContent = nomeProjeto;
    urlDestinoElemento.textContent = url;
    modal.style.display = 'flex';

    let segundos = 5;
    contadorElemento.textContent = segundos;

    const intervalo = setInterval(() => {
        segundos--;
        contadorElemento.textContent = segundos;
        if (segundos <= 0) {
            clearInterval(intervalo);
            window.open(url, '_blank');
            modal.style.display = 'none';
        }
    }, 1000);

    btnCancelar.onclick = function() {
        clearInterval(intervalo);
        modal.style.display = 'none';
    };
    btnIrAgora.onclick = function() {
        clearInterval(intervalo);
        window.open(url, '_blank');
        modal.style.display = 'none';
    };
}