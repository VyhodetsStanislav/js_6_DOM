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
