const btnInicio = document.querySelector('.comeco__inicio');
const btnProjetos = document.querySelector('.comeco__projeto');
const btnSobre= document.querySelector('.comeco__sobre');
const conteudoPrincipal = document.querySelector('[data-conteudo="inicial"]')

btnInicio.addEventListener('click', () =>{
    btnInicio.classList.toggle('comeco__logos--active')
    valor.classList.remove('inicial-hidden')
})

btnProjetos.addEventListener('click', () =>{
    btnProjetos.classList.toggle('comeco__logos--active');
    ocultaConteudo()
})

btnSobre.addEventListener('click', () =>{
    btnSobre.classList.toggle('comeco__logos--active');
    ocultaConteudo()
})

function ocultaConteudo(){
    const conteudo = conteudoPrincipal.dataset.conteudo;

    valor = document.querySelector(`[data-conteudo="${conteudo}"]`)
    valor.classList.add('inicial-hidden')
}

