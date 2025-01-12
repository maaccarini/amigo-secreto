let listaAmigos = [];
let amigoCampo = document.getElementById('nome-amigo');
let amigoIncluido = document.getElementById('lista-amigos');
function adicionar() {
    let nomeAmigo = amigoCampo.value;
    if (nomeAmigo.length >= 3 && nomeAmigo != '') {
        if (!listaAmigos.includes(nomeAmigo)) {
            if (amigoIncluido.textContent == '') {
                amigoIncluido.textContent += `${nomeAmigo}`;
            }
            else {
                amigoIncluido.textContent += `, ${nomeAmigo}`;
            }
            listaAmigos.push(nomeAmigo);
            amigoCampo.value = '';
        }
        else {
            amigoCampo.value = '';
            alert('Amigo já incluído!');
        }
    }
    else {
        amigoCampo.value = '';
        alert('Insira o nome novamente!');
    }
}
let amigoSorteado = [];
let campoSorteio = document.getElementById('lista-sorteio');
function sortear() {
    let numeroAleatorio = 0;
    if (listaAmigos.length < 4) {
        let textPessoa = listaAmigos.length >= 2 ? 'pessoas' : 'pessoa';
        alert(`Mínimo para sortear é 4 pessoas. Você colocou ${listaAmigos.length} ${textPessoa}.`);
    }
    else {
        while (amigoSorteado.length < listaAmigos.length) {
            numeroAleatorio = Math.floor(Math.random() * listaAmigos.length);
            if (!amigoSorteado.includes(listaAmigos[numeroAleatorio])) {
                amigoSorteado.push(listaAmigos[numeroAleatorio]);
            }
            else {
                console.log('Item já incluído');
            }
        }
        for (let i = 0; i < amigoSorteado.length; i++) {
            if (i == amigoSorteado.length - 1) {
                campoSorteio.innerHTML = campoSorteio.innerHTML + amigoSorteado[i] + ' --> ' + amigoSorteado[0] + '<br/>';
            } else {
                campoSorteio.innerHTML = campoSorteio.innerHTML + amigoSorteado[i] + ' --> ' + amigoSorteado[i + 1] + '<br/>';
            }
        }
    }
}
function reiniciar() {
    listaAmigos = [];
    amigoSorteado = [];
    amigoCampo.value = '';
    amigoIncluido.textContent = '';
    campoSorteio.textContent = '';
}
/*function removerNome(){
    amigoIncluido.addEventListener('click', function(){
        this.remove();
    });
}*/