const scores = [1, 2, 3, 4, 5];
console.log("scores масив ;", scores)
// Удаляем три элемента массива, начиная с первого элемента (индекс 0)
const deletedScores = scores.splice(0, 3);

// Теперь массив scores содержит два элемента
console.log('scores = ', scores); // [4, 5]

// А массив deletedScores содержит три удаленных элемента
console.log('deletedScores = ', deletedScores); // [1, 2, 3]

console.log('Пример 2'); 



const colors = ["red", "green", "blue"];
console.log('colors = ', colors);

colors.splice(2, 0, "purple");
console.log('colors после применения colors.splice(2, 0, "purple") = ', colors); // ["red", "green", "purple", "blue"]