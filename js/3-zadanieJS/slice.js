const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]

//Если begin и end не указаны, будет создана полная копия исходного массива.


console.log(clients.slice()); // ["Mango", Ajax", "Poly", "Kiwi"]

//Если не указан end, копирование будет от start и до конца исходного массива.


console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]
console.log(clients.slice(2)); // ["Poly", "Kiwi"]

//Если значение start отрицательное, а end не указан, то будут скопированы последние start элементов


console.log(clients.slice(-2)); // ["Poly", "Kiwi"]