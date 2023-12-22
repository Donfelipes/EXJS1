// #1 Contraseña válida

// const contrasenaValida = (str) => {
//     if (str === "2Fj(jjbFsuj" || str === "eoZiugBf&g9") {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(contrasenaValida("2Fj(jjbFsuj")) // true
// console.log(contrasenaValida("eoZiugBf&g9")) // true
// console.log(contrasenaValida("hola")) // false
// console.log(contrasenaValida("")) // false

// #2 Calcular impuestos

// const calcularImpuestos = (edad,ingresos) => {
//     if(edad >= 18 && ingresos >= 1000) {
//         return ingresos * 0.4
//     } else {
//         return 0
//     }
// };

// console.log(calcularImpuestos(18, 1000)) // 400
// console.log(calcularImpuestos(40, 10000)) // 4000
// console.log(calcularImpuestos(17, 5000)) // 0
// console.log(calcularImpuestos(30, 500)) // 0

// #3 IMC indice de masa corporal

// const bmi = (peso,altura) => {
//     const indiceMasaCorporal = peso / (altura * altura);
//     if (indiceMasaCorporal < 18.5){
//         return "Bajo de peso";
//     } else if (indiceMasaCorporal >= 18.5 && indiceMasaCorporal <= 24.9){
//         return "Normal";
//     } else if (indiceMasaCorporal >= 25 && indiceMasaCorporal <= 29.9){
//         return "Sobrepeso";
//     } else {
//         return "Obeso";
//     }
// };

// console.log(bmi(65, 1.8)) // "Normal"
// console.log(bmi(72, 1.6)) // "Sobrepeso"
// console.log(bmi(52, 1.75)) //  "Bajo de peso"
// console.log(bmi(135, 1.7)) // "Obeso"

// #4 Imprimir un arreglo 

// const imprimirArreglo = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }

// const myArray = [1, "Hola", 2, "Mundo"]
// imprimirArreglo(myArray);

// #5 Número de Likes

// const likes = (numero) => {
//     if (numero < 1000) {
//         return numero.toString();
//     } else if (numero <= 1000000) {
//         return `${Math.floor(numero/1000)}K`;
//     } else {
//         return `${Math.floor(numero/1000000)}M`;
//     }
// };

// #6 FizzBuzz

// const fizzBuzz = (numero) => {
//     if(numero % 3 === 0 && numero % 5 === 0){
//         return "fizzbuzz"
//     } else if (numero % 3 === 0){
//         return "fizz"
//     } else if (numero % 5 === 0){
//         return "buzz"
//     } else {
//         return numero
//     }

// };

// #7 Contar rango de números

// const contarRango = (num1,num2) => {
//     let contador = 0;
//     for (let i = num1 + 1; i < num2; i++){
//         contador++;
//     }
//     return contador;
// }

// #8 Sumar rango de números 

// const sumarRango = (numinicial,numfinal) => {
//     if (numinicial === numfinal){
//         return 0;
//     }
//     let suma = 0;
//     for (let i = numinicial; i <= numfinal; i++){
//         suma += i;
//     }
//     return suma;
// }

// #9 Número de aes (letra "a")


// const numeroDeAes = (str) => {
// let contador = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i].toLowerCase() === "a"){
//             contador++;
//         }
//     }
//     return contador;
// }

// #10 Número de caracteres 

// const numeroDeCaracteres = (str,caracter) => {
//     let contador = 0;
//     for (let i = 0; i < str.length; i++){
//         if (str[i] === caracter){
//             contador++;
//         }
//     }
//     return contador;
// }   


// 11# Sumar arreglo

// const sumarArreglo = (numeros) => {
//     let contador = 0;
//     for (let i = 0; i < numeros.length; i++){
//         contador += numeros[i];
//     }
//     return contador;
// }

// #12 Multiplicar arreglo

// const multiplicarArreglo = (numbers) => {
//     let result = 1;
//     for (let i =0; i < numbers.length; i++){
//         result *= numbers[i];
//     }
//     return result;
// }

// #13 Remover ceros

// const removerCeros = (numbers) => {
//     let result = [];
//     for (let i = 0; i < numbers.length; i++){
//         if (numbers[i] != 0){
//             result.push(numbers[i]);
//         }
//     }
//     return result;
// }

// #14 Sumar arreglo entre el rango 

// const sumarArreglo = (numbers, inicial, final) => {
//     let result = 0;
//     if (inicial === 0 && final === 0) {
//         return 0;
//     }
    
//     for (let i = inicial; i <= final; i++){
//         result += numbers[i];
//     }
//     return result;
// }

// #15 Transcribir ADN a ARN

// const transcribir = (adn) => {
//     let complemento = "";
//     for (let i = 0; i < adn.length; i++){
//         let base = adn[i];
//         if (base === "G") {
//             complemento += "C";
//         } else if (base === "C"){
//             complemento += "G"
//         } else if (base === "T"){
//             complemento += "A"
//         } else if (base === "A"){
//             complemento += "U"
//         }
//     }

//     return complemento;
// }

// #16 Capitalizar palabra

const capitalizar = (str) => {
    return str.length > 0 ? str[0].toUpperCase() + str.slice(1): str;
}

console.log(capitalizar("pedro")) // "Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo"
console.log(capitalizar("")) // ""
