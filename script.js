// script.js

// Função para alternar tema claro/escuro e salvar preferência no localStorage
const botaoTema = document.getElementById('tema-btn');
const body = document.body;

function alternarTema() {
  if (body.getAttribute('data-tema') === 'escuro') {
    body.removeAttribute('data-tema');
    botaoTema.textContent = 'Alternar Tema Escuro';
    localStorage.setItem('tema', 'claro');
  } else {
    body.setAttribute('data-tema', 'escuro');
    botaoTema.textContent = 'Alternar Tema Claro';
    localStorage.setItem('tema', 'escuro');
  }
}

// Verifica se há preferência salva e aplica
function aplicarTemaSalvo() {
  const temaSalvo = localStorage.getItem('tema');
  if (temaSalvo === 'escuro') {
    body.setAttribute('data-tema', 'escuro');
    botaoTema.textContent = 'Alternar Tema Claro';
  } else {
    botaoTema.textContent = 'Alternar Tema Escuro';
  }
}

// Evento do botão tema
if (botaoTema) {
  botaoTema.addEventListener('click', alternarTema);
}

// Inicializa tema no carregamento da página
window.addEventListener('DOMContentLoaded', aplicarTemaSalvo);

// Função para formulário de contato (exemplo simples)
const formContato = document.getElementById('form-contato');

if (formContato) {
  formContato.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = formContato.nome.value.trim();
    const email = formContato.email.value.trim();
    const mensagem = formContato.mensagem.value.trim();

    if (nome === '' || email === '' || mensagem === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Aqui poderia enviar os dados para um backend ou serviço de email
    alert(`Obrigado pelo contato, ${nome}! Em breve responderei seu email.`);
    formContato.reset();
  });
}