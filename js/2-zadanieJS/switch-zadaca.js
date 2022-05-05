//сделать переменные
const option = 2;
let massage = "";

//сделать switch 1 2 3
switch (option) {
  case 1:
    massage = "самовывоз";
    break;
  case 2:
    massage = "курьер";
    break;
  case 3:
    massage = "почта";
    break;
  default:
    massage = "вам перезвонит менеджер";
}

//в каждом кейсе записывать в massage строку
//сделать лог massage
console.log(massage);
