const magicBtn = document.querySelector('.js-magic-btn');


// magicBtn.addEventListener('click', () => {
//     const navEl = document.querySelector('.site-nev');
//     console.log(navEl.classList);
//     // добавить класс к .site-nev (работает только с классами)
//     navEl.classList.add('super-cool', 'dddddddddd');
// });
// const currentPageUrl = '/portfolio'
// const linkEl = document.querySelector('site-nev__link[href="${currentPageUrl}"]')
const navEl = document.querySelector('.site-nev');
console.log("navEl", navEl);
// console.log("navEl.classList", navEl.classList);
// добавить класс к .site-nev (работает только с классами)
// navEl.classList.add('super-cool', 'dddddddddd');
// // удаление класса 'dddddddddd'
// navEl.classList.remove('dddddddddd')

// // переключение добавить удалить тогул
// magicBtn.addEventListener('click', () => {
//    navEl.classList.toggle('dobav_class')
// });

// // посмотреть если такой класс
// console.log('dfnjkdfs', navEl.classList.contains('dfnjkdfs')); // возращает тру или фолс

navEl.classList.add('.site-nav__item--current')