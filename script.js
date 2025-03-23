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

    

const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)


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
    // Troca a cor do fundo
    if (document.body.style.backgroundColor === 'black') {
      document.body.style.backgroundColor = 'white';  // Cor de fundo branca
    } else {
      document.body.style.backgroundColor = 'black';  // Cor de fundo preta
    }
  
    // Troca a cor do texto no corpo
    if (document.body.style.color === 'white') {
      document.body.style.color = 'black';  // Cor do texto preta
    } else {
      document.body.style.color = 'white';  // Cor do texto branca
    }
  
    // Troca a cor do texto nos links da navegação
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      if (link.style.color === 'white') {
        link.style.color = 'black';  // Cor do texto dos links preta
      } else {
        link.style.color = 'white';  // Cor do texto dos links branca
      }
    });
  });
  
    
    
  });

// Seleciona o botão e o elemento de texto
const botaoImagem = document.getElementById('botaoImagem');
const textoAparecer = document.getElementById('textoAparecer');

// Adiciona o evento de clique
botaoImagem.addEventListener('click', function() {
  // Alterna a visibilidade do texto abaixo
  if (textoAparecer.style.display === 'none' || textoAparecer.style.display === '') {
    textoAparecer.style.display = 'block';  // Exibe o texto
  } else {
    textoAparecer.style.display = 'none';  // Oculta o texto novamente
  }
});

// Seleciona os botões e os elementos de texto
const botaoImagemGo = document.getElementById('botaoImagemGo');
const textoGo = document.getElementById('textoGo');

const botaoImagemFire = document.getElementById('botaoImagemFire');
const textoFire = document.getElementById('textoFire');

// Adiciona os eventos de clique para cada botão de imagem
botaoImagemGo.addEventListener('click', function() {
  if (textoGo.style.display === 'none' || textoGo.style.display === '') {
    textoGo.style.display = 'block';  // Exibe o texto sobre Pokémon GO
  } else {
    textoGo.style.display = 'none';  // Oculta o texto sobre Pokémon GO
  }
});

botaoImagemFire.addEventListener('click', function() {
  if (textoFire.style.display === 'none' || textoFire.style.display === '') {
    textoFire.style.display = 'block';  // Exibe o texto sobre Pokémon FireRed
  } else {
    textoFire.style.display = 'none';  // Oculta o texto sobre Pokémon FireRed
  }
});

// Seleciona o botão e o elemento de texto
const botaoImagemLeaf = document.getElementById('botaoImagemLeaf');
const textoLeaf = document.getElementById('textoLeaf');

// Adiciona o evento de clique para o botão da imagem
botaoImagemLeaf.addEventListener('click', function() {
  if (textoLeaf.style.display === 'none' || textoLeaf.style.display === '') {
    textoLeaf.style.display = 'block';  // Exibe o texto sobre Pokémon LeafGreen
  } else {
    textoLeaf.style.display = 'none';  // Oculta o texto sobre Pokémon LeafGreen
  }
});

ScrollReveal().reveal('#inicio', { delay: 350 });
ScrollReveal().reveal('#poké', { delay: 400 });
ScrollReveal().reveal('#contato', { delay: 500 });
ScrollReveal().reveal('#exemplos', { delay: 350 });

document.getElementById("enviarMensagem").addEventListener("click", function () {
  document.getElementById("mensagemConfirmacao").innerText = "Mensagem enviada!";
});