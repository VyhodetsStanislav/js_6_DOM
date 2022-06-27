// * Напеши скрипт который подсчитает сумму всех четных чисел
// * которых входят диапазон чисел в переменных от min до max
// * Например , если min=0 и max=5 , то диапазон 0-5 , и в нем два четных
// числа - 2 и 4 , их сумма 6

const min = 0;
const max = 5;
let total = 0;

for (let i = min; i <= max; i += 1) {
  if (i % 2 == 0) {
    console.log("четные числа", i);
    total += i;
  }
}

for (let i = min; i <= max; i += 1) {
  if (i % 2 == 1) {
    console.log("Нечетные", i);
  }
}

console.log("total: ", total);
