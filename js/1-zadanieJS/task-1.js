const x1 = 10;
const x2 = 50;
const nomber = 15;

console.log(`Число ${nomber} попадает в отрезок до ${x1}`, nomber < x1);
console.log(`Число ${nomber} попадает в отрезок после ${x2}`, nomber > x2);

const res = nomber > x1 && nomber < x2;
console.log(`Число ${nomber} попадает в отрезок от ${x1} до ${x2} `, res);

const res2 = nomber < x1 || nomber > x2;
console.log(
  `Число ${nomber} попадает в отрезок до ${x1} или после ${x2} `,
  res2
);
