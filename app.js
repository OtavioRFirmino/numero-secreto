alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = prompt('Digite o limite do número secreto: ');
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativa = 1; 

//enquanto chute não for igual ao numeroSecreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    //se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    
    //se não    
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativa++;
    }
    

}
let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativa} ${palavraTentativa}.`);

//if (tentativa > 1) {
//alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativa} tentativas.`);
//} else {
//alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativa} tentativa.`);
//}


