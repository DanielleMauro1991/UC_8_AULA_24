//Aula 24-10-2022
// Percorrer de Zero até o número de alunos

//Se o número for par, escreva ‘par’ e o número correspondente

//Se o número for ímpar, escreva ‘ímpar’ e o número correspondente  

//Se o número for zero, escreva ‘zero’ e o número correspondente

let numerodealunos = 10

for (let contador = 0; contador <= numerodealunos; contador++) {

    console.log (contador)
}




let numerodealunos = 10

for (let contador = 0; contador <= numerodealunos; contador++) {

    console.log (contador)

    if (contador == 0 ){
        console.log ("O número atual é zero")
    }else if (contador % 2 ==0){
            console.log ("O número é par")
        }else{
            console.log ("O número é ímpar")
        }
        }
    
        let numerodealunos = 10

for (let contador = 0; contador <= numerodealunos; contador++) {

    console.log (contador)

    if (contador == 0 ){
        console.log ("O número atual é zero")
    }else if (contador % 2 ==0){
            console.log ("O número " + contador + " é par")
        }else{
            console.log ("O número " + contador + " é ímpar")
        }
        }
    

            
        let numerodealunos = 10

        contador = 0

while (contador <= numerodealunos) {

    if (contador == 0 ){
        console.log ("O número atual é zero")
    }else if (contador % 2 !=0){
            console.log ("O número " + contador + " é ímpar")
        }else{
            console.log ("O número " + contador + " é par")
        }
        contador++

        }


        let nomedealunos = ["Caique", "Tiago", "Jéssica"]

        for (let nome of nomedealunos){

            console.log (`Esta pessoa se chama ${nome}`)
        }


        let idade = 20

        let ingresso = false //Atribui o valor xx à variável ingresso

        if (idade >= 18 && ingresso==true){ // Comparando o valor dentro da variável ingresso

            console.log ("Bem vindo a festa!")
        }else {

            console.log ("Não há permissão para entrar")
        }
        

