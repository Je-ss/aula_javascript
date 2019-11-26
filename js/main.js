
function clicou(){
    
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
   window.open("https://www.w3schools.com/");
   // window.location.href = "https://www.w3schools.com/";
}


function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
   // alert("trocar texto");
   elemento.innerHTML = "Ogrigado por passar o mouse";
}

function voltar(elemento){
   // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";

   elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*function soma(n1,n2){
    return n1 + n2;
}



/*
function validaIdade(idade){
    var validar;
    if (idade >= 18){
    validar = true
    }else{
        validar = false
    }
    return validar;
}
 var idade = prompt("Qual sua idade?");
 console.log(validaIdade(idade));



 //alert(soma(5,10));





/*function soma (n1,n2){
    return n1 + n2;
}

function setReplace(frase,nome,novo_nome){
    return frase.replace(nome,novo_nome)

}

alert (soma(5,10));
alert(setReplace("Vai São Paulo", "São Paulo","Brasil"));

/*var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());

/*var d = new Date();
alert(d.getMinutes());



/*var d = new Date();
alert(d.getMonth()+1);


/*
var count;
for (count= 0;count <= 5; count++){
    alert(count);
};



/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count ++;
};
/*
var count = 0;
while (count <= 5){
    console.log(count);
    count ++;
}

/*var count = 0;
while (count <= 5){
    console.log(count);
    count = count + 1;
}


/*
var idade = prompt("Qual sua idade?");

if (idade>=18) {
    alert("maior de idade");
}else{
    alert("menor de idade");
};


/*
var frutas =[ {nome:"maça", cor:"vermelha"}, {nome:"usa", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);



/*
//var lista = ["maça", "pera", "laranja"];
//lista.push("usa");
//lista.pop();
//console.log(lista.reverse());
//console.log(lista.length());

//console.log(lista);
//console.log(lista.toString());
//console.log(lista[0]);
//console.log(lista.toString()[0]);

//console.log(lista.join("|"));


// var nome = "Jeane Sousa Santos";
 //var n1 = 5;
// var n2 = 3;
 //var frase = "São Paulo é o melhor time do mundo";
/*alert(nome +  " tem " + idade + " anos ");*/
/*alert(idade+idade2);*/
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.toLocaleLowerCase());
//alert(frase.replace("São Paulo", "Brasil"));