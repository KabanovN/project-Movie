/*jshint esversion: 6 */
/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promo = document.querySelector('.promo__content'),
    adv = document.querySelectorAll('.promo__adv img'),
    genre = promo.querySelector('.promo__genre'),
    promoImage = promo.querySelector('.promo__bg'),
    moviesList = promo.querySelector('.promo__interactive-list');

adv.forEach(item => {
    item.remove();
});

genre.textContent = 'Драма';

promoImage.style.backgroundImage = 'url("img/bg.jpg")';

movieDB.movies.sort();

moviesList.innerHTML = '';

movieDB.movies.forEach((film, i) => {
    moviesList.innerHTML += `
        <li class="promo__interactive-item">
            ${i + 1}. ${film}
            <div class="delete"></div>
        </li>`
});





