//Условие
//    * Напеши скрипт который подщитует общюю сумма зарплат сотрудников
//    * Количество работников хранится в переменной employees.
//   * Зарплата каждого работника это случайное число от 500 до 5000
//    * Записать суму в переменную totalSalary и вывести в консоль

//Алгоритм
// 1 сделать вары
// 2 перебрать работников в цикле
// 3 сгенерировать случайную зарплат
// 4 прибавить к тоталу
// 5 лог

// 1 сделать вары
const minSalary = 500;
const maxSalary = 5000;
const employees = 4;
let totalSalary = 0;
// 2 перебрать работников в цикле
for (let i = 1; i <= employees; i += 1) {
  // 3 сгенерировать случайную зарплат
  const salary = Math.round(
    Math.random() * (maxSalary - minSalary) + minSalary
  );
  console.log(`ЗП работника номер ${i} - ${salary}`);
  // 4 прибавить к тоталу
  totalSalary += salary;
}
// 5 лог
console.log("totalSalary", totalSalary);
