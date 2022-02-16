const magicBtn = document.querySelector('.js-magic-btn');

const imageEl = document.querySelector('.hero__image');
// magicBtn.addEventListener('click', () => {
// // ссылка на изображение
// const imageEl = document.querySelector('.hero__image');
// console.log("обект hero__image", imageEl);
// console.log('значение элимента src', imageEl.src);
// //перезаписываем значение элемента
// imageEl.src = './imeg/dog.jpg' ;
// imageEl.alt = 'это новая сабака'
// });

// // const heroTitleEl = document.querySelector('.hero__title');
// // //console.log(heroTitleEl)

// // // Получить только текстовый контент
// // console.log(heroTitleEl.textContent);

// // // замена текста

// // heroTitleEl.textContent = "меняем текст"
// // console.log(heroTitleEl.textContent);


// //стандартезирываный интерфейс для работы с любым отребутом
// console.log(imageEl.getAttribute('src'));
// // толлько для тех атребутов которые идут как свойство обекта
// console.log(imageEl.src);

// // // удаление атребута src
// // imageEl.removeAttribute('src')

// // проверка естли атребут
// console.log(imageEl.hasAttribute('src')); // true



// // data-атребуты
// const actions = document.querySelectorAll('.js-actions button');
// console.log(actions[0].dataset.action);
// console.log(actions[1].dataset.action);
// console.log(actions[2].dataset.action);

//ввод текста
magicBtn.addEventListener('click', () => {
const inputEl = document.querySelector('.js-input')
console.log(inputEl.value); // у input свойство атребута хронится в value
} );

















