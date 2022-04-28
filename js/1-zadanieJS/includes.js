const blacklisttedWord1 = "спам";
const blacklisttedWord2 = "распродажа";

const string1 = "Привет это спам";
const string2 = "Привет это РАСПРОДАЖА";
const string3 = "Рекламная компания";

console.log(string1.includes(blacklisttedWord1));
console.log(string1.includes(blacklisttedWord2));

console.log(string2.includes(blacklisttedWord1));
//нормализация строки
console.log(string2.toLowerCase().includes(blacklisttedWord2));
console.log(string3.includes(blacklisttedWord1));
console.log(string3.includes(blacklisttedWord2));
