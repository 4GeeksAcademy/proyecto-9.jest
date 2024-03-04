//const sum = (a,b) => {
   // return a + b
//}
//console.log(sum(7,3))
//module.exports = { sum };

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
const fromDollarToYen = function(valueInEuro) {
    let valueInYen = valueInEuro * 156.5;
    return valueInYen;
}
const fromYenToPound = function(valueInEuro) {
    let valueInPound = valueInEuro * 0.87;
    return valueInPound;
}
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }