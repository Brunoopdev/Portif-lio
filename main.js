const botoesCabecalho = document.querySelectorAll('.cabecalho__lista__item');
const secoes = document.querySelectorAll('[data-id]')

botoesCabecalho.forEach((elementoBotao, index) =>{
    const botoes = elementoBotao;
    
    botoes.addEventListener('click', () =>{

        botoesCabecalho.forEach(elemento =>{
            const botaoSelecionado = elemento;
            botaoSelecionado.classList.remove('cabecalho__lista__item--active');  
        })

        const mudaContexto = botoes.dataset.button;
        botoes.classList.add('cabecalho__lista__item--active');

        secoes.forEach(dataSecao =>{
            dataSecao.removeAttribute('data-id');
            dataSecao.classList.add('hidden')
        })

        secoes[index].setAttribute('data-id', `${mudaContexto}`);

        
        secoes[index].classList.remove('hidden');
    })
})







