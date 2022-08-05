const kelvin = 293;

// celsius is 273 desgrees less than kelvin

const celsius = kelvin - 273; // Celsius is now 20
console.log("Celsiuis converted from kelvin: ", celsius);

// This variable, Fahrenheit, is converting the previous celsius variable by dividing 9 by 5, multiplying the celsius variable value then adding 32 to it.

let fahrenheit = celsius * (9 / 5) + 32;
console.log("Fahrenheit result: ", fahrenheit);

// This is taking the current fahrenheit and rounding it and displaying the result in the console log.
console.log("Fahrenheit number rounded: ", Math.round(fahrenheit));
