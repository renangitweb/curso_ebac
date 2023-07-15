const form = document.getElementById('form-number');
const itemA = document.getElementById('campoA');
const itemB = document.getElementById('campoB');
formEvalido = false;

function ComparaNumero(numB, numA){
    
    return numB >= numA;
}

form.addEventListener('submit', function(e){
    const msgSucesso =  document.querySelector('.mensagemSucesso');
    const msgError = document.querySelector('.mensagemError');
    const containerMensagemSucesso = `Sucesso! O campo A = <b>${itemA.value}</b> é menor que o campo B = <b>${itemB.value}</b> `;
    
    e.preventDefault();
    formEvalido = ComparaNumero(itemB.value,itemA.value);

    if(formEvalido){
        msgSucesso.style.display='block';
        msgSucesso.innerHTML = containerMensagemSucesso;
        itemA.value = '';
        itemB.value = '';
        msgError.style.display='none';

        
    } else{
        msgError.innerHTML = 'O número do campo B deve ser maior que o campo A!'
        msgError.style.display='block';
        msgSucesso.style.display='none';
    }
    
})

/*
itemB.addEventListener('keyup', function(e){
    const msgSucesso =  document.querySelector('.mensagemSucesso');
    const msgError = document.querySelector('.mensagemError');
    const containerMensagemSucesso = `Sucesso! O campo A = <b>${itemA.value}</b> é menor que o campo B = <b>${itemB.value}</b> `;
    var numberB = parseFloat(e.target.value);
    formEvalido = ComparaNumero(numberB, itemA.value);
    if(formEvalido){
        msgSucesso.innerHTML=containerMensagemSucesso;
        msgSucesso.style.display = 'block';
        msgError.style.display='none';
        msgError.style ='';
    }else{
        msgError.innerHTML = 'O número do campo B deve ser maior que o campo A!'
        msgError.style.display='block';
        msgSucesso.style.display='none';
    }
})

itemA.addEventListener('keyup', function(e){
    const msgSucesso =  document.querySelector('.mensagemSucesso');
    const msgError = document.querySelector('.mensagemError');
    const containerMensagemSucesso = `Sucesso! O campo A = <b>${itemA.value}</b> é menor que o campo B = <b>${itemB.value}</b> `;
    var numberB = parseFloat(e.target.value);
    formEvalido = ComparaNumero(numberB, itemA.value);
    if(!formEvalido){
        msgSucesso.innerHTML=containerMensagemSucesso;
        msgSucesso.style.display = 'block';
        msgError.style.display='none';
        msgError.style ='';
    }else{
        msgError.innerHTML = 'O número do campo B deve ser maior que o campo A!'
        msgError.style.display='block';
        msgSucesso.style.display='none';
    }
})
*/








