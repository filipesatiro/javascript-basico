var obj = {
    nome: "Filipe",
    idade: 31,
    profissao: "Programador",
    estaTrabalhando: true,
};
console.log(obj);
console.log(typeof obj);

console.log(obj.nome);
console.log(obj.profissao);
console.log(obj.idade);

console.log("O meu nome é " + obj.nome);

obj.nome = 'Augusto';
console.log(obj.nome);
console.log(obj);

obj.graduacao = true;
console.log(obj);