const salari = 1000;

if (salari < 500) {
  console.log("Уровень 1");
} else if (salari > 500 && salari < 1500) {
  console.log("Уровень 2");
} else if (salari > 1500 && salari < 3000) {
  console.log("Уровень 3");
} else {
  console.log("Уровень 4");
}
