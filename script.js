const numeroFormulario = document.getElementById('formNumber');

const mensagemSucesso = (numA, numB) => `Parabéns! O número ${numB} é maior que o número ${numA}.`
const mensagemError = () => `Negado! O número B tem que ser maior que o número A`
numeroFormulario.addEventListener('submit', function(e){
    e.preventDefault();

    let numA = document.getElementById('numeroA').value;
    let numB = document.getElementById('numeroB').value;

    const containerMensagemSucesso = document.getElementById('mensagem-sucesso');
    const containerMensagemError = document.getElementById('mensagem-error');
    containerMensagemSucesso.innerHTML = '';
    containerMensagemError.innerHTML = '';

    const validaSucesso = numB > numA;

    if(validaSucesso){
        containerMensagemSucesso.innerHTML = mensagemSucesso(numA, numB);
        containerMensagemSucesso.style.display = 'block';

        numA.value = '';
        numB.value = '';

    } else {
        containerMensagemError.innerHTML = mensagemError();
        containerMensagemError.style.display = 'block';

    }
})