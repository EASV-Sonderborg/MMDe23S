
let input = prompt("Bitte Grad Celsius angeben");

let result = celsiusToFahrenheit(input);

let result0 = celsiusToFahrenheit(15);
let result2 = celsiusToFahrenheit(30);
console.log("15 grad celsius = " + result + "F");
console.log("30 grad celsius = " + result2 + "F");

console.log(input + " grad celsius = " + result + "F");


//celsiusToFahrenheit(x) muss kein x sein kann auch(celsius) sein
function celsiusToFahrenheit(x){
    return x * ( 9 / 5 ) + 32;
}