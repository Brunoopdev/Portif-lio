const btnInicio = document.querySelector('.comeco__inicio');
const btnProjetos = document.querySelector('.comeco__projeto');
const btnSobre= document.querySelector('.comeco__sobre');
const conteudoPrincipal = document.querySelectorAll('[data-conteudo]')
const botoes = document.querySelectorAll('[data-botao]');


console.log(botoes)

botoes.forEach(evento =>{
    const valor = evento.dataset.botao;

    console.log(valor);
})


btnInicio.addEventListener('click', () =>{
    btnInicio.classList.toggle('comeco__logos--active')
})

btnProjetos.addEventListener('click', () =>{
    btnProjetos.classList.toggle('comeco__logos--active');
})

btnSobre.addEventListener('click', () =>{
    btnSobre.classList.toggle('comeco__logos--active');
})

// function mostraConteudo(){
//     const conteudo = conteudoPrincipal.dataset.conteudo;
//     conteudoPrincipal.forEach(valor => {
//         elemento.classList.add('conteudo--hidden')
//     });
    
// }


conteudoPrincipal.forEach(elemento =>{

})
    // const conteudo = conteudoPrincipal.dataset.conteudo;