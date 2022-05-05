// switch(значение с которым сравниваем) {
//    case сравнеавемое значение:
//       условие;
//       может быть произвольное количество строк
//       break;
//    case сравнеавемое значение:
//       условие;
//       break;
//    default:
//      счто вывести если неодно условие не сработает;
// }

// stars количество звезд отеля
const stars = 4;
// prise цена
let prise;

switch (stars) {
  case 1:
    prise = 20;
    break;
  case 2:
    prise = 30;
    break;
  case 3:
    prise = 50;
    break;
  case 4:
    prise = 70;
    break;
  case 5:
    prise = 120;
    break;
  // групперовка кейсов для одного числа
  case 6:
  case 7:
    prise = 200;
    break;
  default:
    console.log("такого количества звезд нет");
}
console.log(prise);
