//digitar números
function insert(n1){
    document.querySelector('#resultado').innerHTML += n1;
    console.log(`Usuário digitou: ${n1}`);
}
//digitar operadores e vírgula
function op(n1){
    const resultado = document.querySelector('#resultado').innerHTML;
    const ultimaletra = resultado.charAt(resultado.length -1);
    console.log(ultimaletra);
    if(ultimaletra>=0){
        document.querySelector('#resultado').innerHTML += n1;
    }else{
        const resultado = document.querySelector('#resultado').innerHTML;
        document.querySelector('#resultado').innerHTML = resultado.substring(0,resultado.length -1)
    }
}
//calcular
function calc(){
    var resultado = document.querySelector('#resultado').innerHTML;
    if(resultado){
        document.querySelector('#resultado').innerHTML = eval(resultado)
    }else{
        document.querySelector('#resultado').innerHTML = `Erro de Cálculo`
    }
}
//limpar
function clean(){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    console.log(`Usuário limpou a tela`);
}
function C(){
    location.reload();
}
function back(){
    const resultado = document.querySelector('#resultado').innerHTML;
    document.querySelector('#resultado').innerHTML = resultado.substring(0,resultado.length -1)
    console.log(`Usuário deletou um dígito`)
}