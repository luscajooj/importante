
function abrirCarta() {
    document.getElementById("modal").style.display = "block";
}

function fecharCarta() {
    document.getElementById("modal").style.display = "none";
}

function atualizarContador() {
    const inicio = new Date("2023-03-26T00:00:00");
    const agora = new Date();
    const diff = agora - inicio;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);

    const anos = Math.floor(dias / 365);
    const diasRestantes = dias % 365;

    document.getElementById("contador").innerText = `Estamos juntos há ${anos} ano(s), ${diasRestantes} dia(s), ${horas} hora(s) e ${minutos} minuto(s) 💖`;
}

setInterval(atualizarContador, 1000);
atualizarContador();

document.querySelectorAll('.slide').forEach(img => {
    img.addEventListener('click', () => {
        const modal = document.getElementById('modalImagem');
        const imagemAmpliada = document.getElementById('imagemAmpliada');
        imagemAmpliada.src = img.src;
        modal.style.display = 'block';
    });
});

function fecharImagem() {
    document.getElementById('modalImagem').style.display = 'none';
}

function revelarImagem() {
    const imagem = document.getElementById("imagem-surpresa");
    imagem.style.display = "block";
}
