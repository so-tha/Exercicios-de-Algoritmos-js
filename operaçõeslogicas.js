/*
 passou := falso
     escreval("Digite o nome do aluno: ")
     leia (nome)
     escreval ("Digite a nota 1 do aluno: ")
     leia(nota01)
     escreval ("Digite a nota 2 do aluno: ")
     leia(nota02)
     media := (nota01 + nota02) / 2

    se media >=50 entao
     passou := verdadeiro
     fimse
    se ( passou )  && (media >50 || media <= 70) entao
     escreval  ("Aprovado",nome)
     senao
     escreval ("Reprovado",nome)

     fimse
*/
var nome, idade;

passou = false

nome = prompt("Digite o seu nome: ")
idade = prompt("Digite sua idade: ")
alert("O nome digitado foi: " + nome)
alert("A idade digitada foi: " + idade)

media = (parseInt(nota01) + parseInt (nota02) / 2
if(media >= 50){
    passou = true;
if (passou && media >=70 ) 
 alert("Aprovado! + nome")
}
    else
     alert("Reprovado! + nome)