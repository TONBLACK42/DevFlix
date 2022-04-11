/*Click do Botão assistir Agora*/
document.getElementById("btnAssistir").onclick = function () {
    location.href = "assistir.htm";
};

/*Click do Botão Mais Informações*/
document.getElementById("btnMaisInformacoes").onclick = function () {
    location.href = "mais-informacoes.htm";
};

/*const imagem = document.querySelector('img');

imagem.addEventListener('click',(Event) => {
    const {src} = Event.target;
    alert('O que?');
}

)*/

function filmesCarrosel(nomeFilme,src)
{
    alert(`Você selecionou o fime: ${nomeFilme}. Estamos em construção.`);
}
