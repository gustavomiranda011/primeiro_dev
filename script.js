// Alternar tema escuro/claro
const temaBtn = document.getElementById('tema-btn');
const body = document.body;

// Verificar preferência do usuário
const temaPreferido = localStorage.getItem('tema') || 'claro';
body.setAttribute('data-tema', temaPreferido);
atualizarTextoBotaoTema();

temaBtn.addEventListener('click', () => {
    const temaAtual = body.getAttribute('data-tema');
    const novoTema = temaAtual === 'claro' ? 'escuro' : 'claro';
    
    body.setAttribute('data-tema', novoTema);
    localStorage.setItem('tema', novoTema);
    
    atualizarTextoBotaoTema();
});

function atualizarTextoBotaoTema() {
    const temaAtual = body.getAttribute('data-tema');
    temaBtn.textContent = temaAtual === 'claro' 
        ? 'Alternar Tema Escuro' 
        : 'Alternar Tema Claro';
}

// Formulário de contato
const formContato = document.getElementById('form-contato');

if (formContato) {
    formContato.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simular envio
        alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
        formContato.reset();
    });
}

// Efeito hover nos cards de projeto
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