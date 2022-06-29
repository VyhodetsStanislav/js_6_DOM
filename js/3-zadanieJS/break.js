const clients = ["Mango", "Poly", "Ajax"];
const clientNameToFind = "Poly";
let message;

for (const client of clients) {
  if (client === clientNameToFind) {
    message = "Клиент с таким именем есть в базе данных!";
    break;
  }

  message = "Клиента с таким именем нету в базе данных!";
}

console.log(message);
