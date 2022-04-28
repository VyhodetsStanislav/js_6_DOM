console.log("нормализация");
const brand = "Samsung";
console.log(brand);
//нижний регистекр

const normalizedBrand = brand.toLowerCase();
console.log(normalizedBrand);

console.log("нормализация с выборкой");
let b = "SaMsUnG";
console.log(b);
//b[0] этот символ пришиваем b.slice(1) выводит все символы с 2 знака toLowerCase(); нормалезирует в нижнем регистре
b = b[0] + b.slice(1).toLowerCase();
console.log(b);
