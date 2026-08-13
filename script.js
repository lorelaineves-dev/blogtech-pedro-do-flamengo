// Seleção dos elementos do HTML
const likeBtn = document.getElementById('likeBtn');
const likeCountElement = document.getElementById('likeCount');

// Variável para armazenar a quantidade de curtidas
let count = 0;

// Função executada ao clicar no botão
likeBtn.addEventListener('click', () => {
  count++;
  likeCountElement.textContent = count;

  // Efeito rápido de pulso no contador
  likeCountElement.style.display = 'inline-block';
  likeCountElement.style.transform = 'scale(1.3)';
  likeCountElement.style.transition = 'transform 0.1s ease';

  setTimeout(() => {
    likeCountElement.style.transform = 'scale(1)';
  }, 100);
});
