//clearTimeout na Pratica
var x = 0;
 var mytimer = setTimeout(function(){
    console.log("0 x é 0")
},1500);

x = 5;

if(x > 0){
    clearTimeout(mytimer);
    console.log("O x Passou de 0");
}

//clearInterval na pratica
var myInterval = setInterval(function(){
    console.log("Imprimindo interval");
},500);

setTimeout(function(){
    console.log("Não precisamos mais repetir");
    clearInterval(myInterval)
},5000)