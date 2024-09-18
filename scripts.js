// criando constantes para o valor das moedas
const USD = 5.24;
const EUR = 6.2;
const GBP = 7.2;

// capturando os elementos do html
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

// manipulando o input do amount para aceitar apenas números
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  // verifica se o input tem caracteres que não sao números contando todos os caracteres
  amount.value = amount.value.replace(hasCharactersRegex, "");
  // o amount ira receber no value/input apenas o que estiver atendendo ao regex
  // excluindo as letras usando "" vazias
});

// quando o onsubmit acontece ele chama a função convertCurrency
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
};

// função para converter a moeda
function convertCurrency(amount, price, symbol) {
  try {
    // usando o textContent para alterar o texto original do html
    description.textContent = `${symbol} 1 = ${formatCurrencyBrl(price)}`;

    let total = amount * price;
    
    // reutilizando a função formatCurrencyBrl para formatar o total
    total = formatCurrencyBrl(total).replace("R$", "");
    result.textContent = `${total} Reais`;

    // aplica a classe show-result no footer
    footer.classList.add("show-result");

    // se error ele remove a classe e mostra o erro no console
  } catch (error) {
    footer.classList.remove("show-result");
    console.log(error);
    alert("Erro ao converter a moeda, tente mais tarde.");
  }
}

// função para formatar a moeda
function formatCurrencyBrl(value){
    // retorna o valor formatado em moeda brasileira
    // toLocaleString é um método que formata o número de acordo com a localização
    // colocando o Number antes do value ele transforma o valor em número assim podendo
    // usar o metodo toLocaleString
    return Number(value).toLocaleString(
        // o localeString tem a seguinte sintaxe, primeiro o idioma,
        // depois um objeto com as opções de formatação no caso style e currency
        // ficando assim style significa que é uma moeda e o currency é o tipo de moeda
        'pt-BR',
        {style: 'currency', currency: 'BRL'}
    )
}