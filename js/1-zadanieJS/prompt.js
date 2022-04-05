const quantity = prompt("Введите каличество товаров");
console.log(quantity);
console.log("Введенный текст всегда будет стракой", typeof quantity);
const quantityNumber = Number(quantity);
console.log(
  "Функция Number преобразовывается в чесло введеный текст ",
  typeof quantityNumber
);
