
let num = [4, 8 ,2, 9 , 0 , 3]
/*for (let pos = 0; pos<num.length; pos++) {
    console.log(`a posição ${pos} tem o valor ${num [pos]}`)
}*/
/*for (let pos in num) {//para cada posição na variavel num, vou mostrar o num [pos]  
        console.log (`a posição ${pos} tem o valor ${num [pos]}`)
        
} */
let pos = num.indexOf(8) //em que posição está esse numero
if ( pos == -1 ) {
    console.log('O valor não foi encontrado')
} else {
    console.log (`o valor 8 está na posição ${pos}`) 
}
