// capturando os elementos do html
const form = document.getElementById('form');
const amount = document.getElementById('amount');
const currency = document.getElementById('currency');

// manipulando o input do amount para aceitar apenas números
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g;
    // verifica se o input tem caracteres que não sao números contando todos os caracteres
    amount.value = amount.value.replace(hasCharactersRegex, "");
    // o amount ira receber no value/input apenas o que estiver atendendo ao regex
    // excluindo as letras usando "" vazias
})

currency.onsubmit = (event) => {
    event.preventDefault();
    // para ver o que esta sendo capturado no console usar console.log(currency.value)
}