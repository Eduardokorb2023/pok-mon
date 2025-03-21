const barra = document.getElementById('barra');
const texto = document.getElementById('texto');
const botaoIniciar = document.getElementById('botaoIniciar');

// Função para fazer o texto ser falado em voz alta
function falarTexto() {
  const synth = window.speechSynthesis;
  const mensagem = new SpeechSynthesisUtterance(texto.textContent);
  
  // Configurações de voz
  mensagem.volume = 1;  // Volume máximo
  mensagem.rate = 1;    // Taxa normal de fala
  mensagem.pitch = 1;   // Pitch normal da voz

  synth.speak(mensagem);
}

// Função para iniciar a animação da barra
function iniciarAnimacao() {
  barra.style.animation = 'mover 20s linear infinite';  // Inicia a animação da barra
}

// Função para reposicionar a barra conforme a altura do texto
function seguirTexto() {
  const textoRect = texto.getBoundingClientRect();
  const barraHeight = barra.offsetHeight;

  // Ajusta a posição da barra para seguir o texto
  barra.style.top = `${textoRect.top + (textoRect.height / 2) - (barraHeight / 2)}px`;
}

// Função para iniciar a fala, animação e barra seguindo o texto
function iniciarFalaEAnimacao() {
  falarTexto();  // Inicia a fala do texto
  iniciarAnimacao();  // Inicia a animação da barra
  
  // Reposiciona a barra enquanto o texto está sendo falado
  const intervaloReposicionar = setInterval(() => {
    seguirTexto();  // Atualiza a posição da barra para seguir o texto
  }, 20);

  // Para o intervalo de reposicionamento após a fala terminar
  const synth = window.speechSynthesis;
  const mensagem = new SpeechSynthesisUtterance(texto.textContent);
  mensagem.onend = () => {
    clearInterval(intervaloReposicionar);  // Para de reposicionar a barra após a fala
  };
}

// Ação ao clicar no botão
botaoIniciar.addEventListener('click', iniciarFalaEAnimacao);





document.addEventListener('DOMContentLoaded', function() {
  const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
  const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');
  const aumentaFonteBotao = document.getElementById('aumentar-fonte');
  const diminuiFonteBotao = document.getElementById('diminuir-fonte');
  const mudaCorFundoBotao = document.getElementById('mudar-fundo');
  
  let tamanhoAtualFonte = 1;

  // Mostrar e esconder as opções de acessibilidade
  botaoDeAcessibilidade.addEventListener('click', function() {
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
  });

  // Aumentar o tamanho da fonte
  aumentaFonteBotao.addEventListener('click', function() {
    tamanhoAtualFonte += 0.1;
    document.body.style.fontSize = tamanhoAtualFonte + 'rem';
  });

  // Diminuir o tamanho da fonte
  diminuiFonteBotao.addEventListener('click', function() {
    tamanhoAtualFonte -= 0.1;
    document.body.style.fontSize = tamanhoAtualFonte + 'rem';
  });

  // Mudar a cor de fundo
  mudaCorFundoBotao.addEventListener('click', function() {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'lightblue' ? '' : 'lightblue';
  });
});
