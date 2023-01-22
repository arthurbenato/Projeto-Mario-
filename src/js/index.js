/* 
Objetivo 1: quando usuário clicar no botão veja o trailer, devemos abrir o modal com o trailer
Objetivo 2: quando o usuário clicar no x, devemos fechar modal
*/



const botaoTrailer = document.querySelector('.botao-trailer');
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector('.fechar-modal');
const video = document.getElementById("video");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
video.setAttribute("src", "");
});

