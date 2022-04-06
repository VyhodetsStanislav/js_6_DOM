const a = "50px";
console.log(a);
const result = Number.parseInt(a);
console.log("Число после функции Number.parseInt(a) = ", result);
const b = "3dd234550px";
console.log(b);
const result2 = Number.parseInt(b);
console.log("parseInt работает до первого не числа = ", result2);

console.log("Вытянуть также числа после точки (Number.parseFloat)");
let r = "200.74px";
r = Number.parseFloat(r);
console.log(r);

let salari = 1300.1647;
// .toFixed(2) два символа после запятой преобразовывает значение в страку
salari = salari.toFixed(2);
console.log(
  ".toFixed(2) два символа после запятой, преобразовывает значение в страку"
);
console.log(salari);
// Пример 2
let t = 1300.1647;
console.log("три знака после запятой с переводом в цыфры");
console.log(Number(t.toFixed(3)));
