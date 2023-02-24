// Selecione o link que deve rolar a página até a seção "sobre"
const linkNavegacao = document.querySelector('#link');

// Selecione a seção "sobre"
const secaoSobre = document.querySelector('#sobre');

// Adicione o evento de clique ao link
linkNavegacao.addEventListener('click', () => {
  // Role a página até a seção "sobre"
  secaoSobre.scrollIntoView({ behavior: 'smooth' });
});

