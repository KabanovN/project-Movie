/* Задания на урок:
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"
5) Фильмы должны быть отсортированы по алфавиту */

"use strict";

document.addEventListener('DOMContentLoaded', () => {
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
        moviesList = promo.querySelector('.promo__interactive-list'),
        addForm = promo.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type = "checkbox"]');
    
    const removeArrayElement = (array) => {
        array.forEach(item => {
            item.remove();
        });
    };
    
    const makeChanges = () => {
        genre.textContent = 'Драма';
        promoImage.style.backgroundImage = 'url("img/bg.jpg")';
    };
    
    const sortArray = (array) => {
        array.sort();
    };
      
    const createFilmsList = (films, parent) => {
        parent.innerHTML = '';
        sortArray(films);
    
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">
                    ${i + 1}. ${film}
                    <div class="delete"></div>
                </li>`;
        });

        moviesList.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createFilmsList(films, parent);
            });
        });
    };

    const onInputSubmit = (evt) => {
        evt.preventDefault();
    
        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substr(0, 21)}...`;
            }

            movieDB.movies.push(newFilm);
            sortArray(movieDB.movies);
            createFilmsList(movieDB.movies, moviesList);
        }

        if (favorite) {
            console.log('Добавляем любимый фильм');
        }

        evt.target.reset();
    };

    removeArrayElement(adv);
    makeChanges();
    createFilmsList(movieDB.movies, moviesList);
    addForm.addEventListener('submit', onInputSubmit);
});




