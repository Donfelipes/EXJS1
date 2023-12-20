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

const fizzBuzz = (numero) => {
    if(numero % 3 === 0 && numero % 5 === 0){
        return "fizzbuzz"
    } else if (numero % 3 === 0){
        return "fizz"
    } else if (numero % 5 === 0){
        return "buzz"
    } else {
        return numero
    }

};



   