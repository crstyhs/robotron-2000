const robotron = document.querySelector('#robotron') ;
robotron.addEventListener('click',  () =>{
    console.log("tec");
});

function diz_oi(nome) {
    console.log("yeai");
    console.log(nome);
}
diz_oi("compatriota");

const subtrair = document.querySelector('#subtrair') ;
const somar = document.querySelector('#somar') ;
const braco = document.querySelector('#braco') ;
// function manipula_dados (operacao){
//     if (operacao === "subtrair")
//     braco.value = parseInt(braco.value)-1;

//     if(operacao === "somar")
//     braco.value = parseInt(braco.value)+1;
// }

// somar.addEventListener('click',  () =>{manipula_dados("somar");
  
// });
// subtrair.addEventListener('click',  () =>{manipula_dados("subtrair");
  
// });


function manipula_dados (operacao,controle){
    const peca = controle.querySelector("[data-contador]")
        if (operacao === "-")
        peca.value = parseInt(peca.value)-1;

        if(operacao === "+")
        peca.value = parseInt(peca.value)+1;
} 

        const controle = document.querySelectorAll("[data-controle]");
        controle.forEach ((elemento) => {
        elemento.addEventListener("click",(evento) =>{
        manipula_dados(evento.target.dataset.controle , evento.target.parentNode);
        atualiza_estatistica(evento.target.dataset.controle ,evento.target.dataset.peca)
    })
})
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
const estatisticas = document.querySelectorAll("[data-estatistica]")

function atualiza_estatistica( operacao,peca){
    if(operacao === "+")
    estatisticas.forEach( (elemento) =>{
        
         elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    })
    if(operacao === "-")
    estatisticas.forEach( (elemento) =>{
        
        elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica];
   })
}
function trocaImagem(cor){
    document.querySelector(".robo").src="img/Robotron 2000 - " + cor + ".png";
 }
