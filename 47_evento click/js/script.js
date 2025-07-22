//Inserir Click
var btn = document.querySelector("#btn");
console.log(btn);

btn.addEventListener("click", function(){
    console.log("clicou");
    console.log(this);
    this.style.color = "red";
});
//click afetando outros elementos
var paragrafo = document.querySelector("#paragrafo");
paragrafo.addEventListener("click", function(){
    var paragrafo = document.querySelector("#paragrafo");

paragrafo.style.display = "none";
    
});

//double click
var subtitle = document.querySelector(".subtitle");
subtitle.addEventListener("dblclick", function(){
console.log("click duplo!");

});
