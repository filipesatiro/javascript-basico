// toLowerCase e  ToUpperCase

var frase = "Está é a frase que vamos manipular";

var fraseCaixaAlta = frase.toUpperCase();

console.log(fraseCaixaAlta);

console.log(fraseCaixaAlta.toLowerCase());

// trim

var nome = "      Filipe ";
var nomeTrim = nome.trim();

console.log(nome);
console.log(nomeTrim);

// split
console.log(frase.split(" "));

var tags = "PHP, Javascript,  HTML, CSS";

console.log(tags.split(", "));

//lastIndexOf

var fraseDois = "Eu quero a ultima palavra teste desta frase de teste";
console.log(fraseDois.lastIndexOf("teste"));