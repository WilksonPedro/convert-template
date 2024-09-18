// criando constantes para o valor das moedas
const USD = 5.24;
const EUR = 6.20;
const GBP = 7.20;

// capturando os elementos do html
const form = document.querySelector('form');
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

form.onsubmit = (event) => {
    event.preventDefault();
    // para ver o que esta sendo capturado no console usar console.log(currency.value)
    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "$");
            break;
        case "EUR":
            convertCurrency(amount.value, EUR, "€");
            break;
        case "GBP":
            convertCurrency(amount.value, GBP, "£");
            break;
    }
}

// função para converter a moeda
function convertCurrency(amount, price, symbol) {
    console.log(amount, price, symbol);
    
}