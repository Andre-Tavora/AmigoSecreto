let amigos = [];

function adicionarAmigo() {
  var amigoInput = document.getElementById('amigo'); 
  var amigoNome = amigoInput.value.trim(); 

  if (amigoNome === "") {  
    alert('Você não digitou nenhum nome! INVÁLIDO!');
    return;
  }

  if (amigos.includes(amigoNome)) {
    alert('Esse nome já foi adicionado!');
    return;
  }

  amigos.push(amigoNome);
  amigoInput.value = ""; 

  var listaAmigos = document.getElementById('listaAmigos');

  // Criando um novo item de lista (li)
  var novoItem = document.createElement('li');
  novoItem.textContent = amigoNome;
  listaAmigos.appendChild(novoItem); // Adiciona o novo nome à lista
}


function sortearAmigo() {
    if (amigos.length === 0) {
      alert("A lista de amigos está vazia! Assim está secreto demais! Digite um nome.");
      return;
    }
  
    // Sorteio
    var indiceSorteado = Math.floor(Math.random() * amigos.length);
  
    var amigoSorteado = amigos[indiceSorteado];
  
    document.getElementById('resultado').innerHTML = `<li>🎉 O amigo sorteado é: <strong>${amigoSorteado}. Parabéns, voce ganhou...</strong>! 🎉</li>`;
  }
  
