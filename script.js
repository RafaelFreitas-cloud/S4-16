// // -------------Exercício 1-----------------
// function nPares(lista){
//     let pares=[]
//     for (let i=0 ; i<lista.length ; i++){
//         if(lista[i]%2==0){
//             pares.push(lista[i])
//         }
//     }
//     return pares
// }

// let numeros = [1,8,3,6,5,4,7,2,21,30,56,27,70]

// console.log (nPares(numeros))


// -------------Exercício 2-----------------
function somaArray(lista){
    console.log(lista)
    for (let i=0 ; i<lista.length ; i++){
            if (typeof(lista[i]=="string")){
            lista[i]=Number(lista[i])
        }
    }
    let result = 0
    console.log(lista)
    for (let i=0 ; i<lista.length ; i++){
        result += lista[i]
    }
    return `A soma dos elementos é ${result}`
    }

    let numeros = [2, "8", "6", 4]
    console.log(somaArray(numeros))

// lista = [1,"2.2",3,4,5]
// console.log(lista)

// lista.push(6)
// console.log(lista)

// lista[2]=10
// console.log(lista)

// lista[1]=Number(lista[1])
// console.log(lista)

// lista[1]=parseInt(lista[1])
// console.log(lista)
















