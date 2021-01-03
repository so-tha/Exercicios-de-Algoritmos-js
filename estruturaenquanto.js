

function acaoBotao() {
    
    var nome,idade,limite,contador
    limite = prompt ("Digite a quantinda de vezes que vai ser verificado a idade: ")
    contador = 0
    while(contador < limite){
       nome = prompt ("Digite o nome da pessoa: ")
         idade = prompt ("Digite a idade do " + nome)
      if (idade > 18) 
        document.getElementById("paragrafo").innerText = nome + " voce é maior de idade!"
        else
        document.getElementById("paragrafo").innerText = nome + " voce é menor de idade! "
      
        contador++
    }
}




   
    

