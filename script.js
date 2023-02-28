
const calc   =     document.getElementById('btn')


function imc(){
    const nome   =    document.getElementById('textnome').value;
    const altura =    document.getElementById('textalt').value;
    const peso   =    document.getElementById('textpeso').value;
    const res    =    document.getElementById('result')
    
    if(nome == '' || altura=='' ||  peso == ''){
       res.textContent = 'Por favor! Preencha todos os campos'
    }else{
        const valorIMC = (peso / (altura **2)).toFixed(1);
        let classificacao = ''

        if(valorIMC < 18.5){
            classificacao = 'abaixo do peso'
        }else if( valorIMC < 25){
            classificacao = 'com o peso ideal'
        }else if( valorIMC < 30){
            classificacao = 'levemente acima do peso'

        }else if( valorIMC < 35){
            classificacao = ' com obesidade de grrau 1'

        }else if( valorIMC < 40){
            classificacao = 'com obesidade d grau 2'

        }else{
            classificacao = 'com obesidade de grau 3 (obesidade mórbida). CUIDADO!'
        }
             res.textContent = `${nome}, seu IMC é ${valorIMC}, e você está ${classificacao}`
    }

};

calc.addEventListener('click', imc)