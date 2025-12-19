/* Задание на урок

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно */
'use strict';
let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
};

watchLastMovie();
countMovies();
askGenres();
showMyDB();

function watchLastMovie() {
  let lastFilm;
  let lastRate;
  for (let i = 1; i < 3; i++) {
    do {
      lastFilm = prompt("Один из последних просмотренных фильмов?", "");
      lastRate = prompt("На сколько оцените его?", "");
    } while (
      lastFilm.length == 0 ||
      lastFilm.length > 50 ||
      lastRate.length == 0
    );
    personalMovieDB.movies[lastFilm] = lastRate;
  }
}

function countMovies() {
  if (+personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
  } else if (+personalMovieDB.count >= 10 && +numberOfFilms < 30) {
    alert("Вы классический зритель");
  } else if (+personalMovieDB.count <= 30) {
    alert("Вы киноман");
  } else {
    alert("Произошла ошибка");
  }
}

function askGenres(){
  let genre
  for (let i = 1; i < 4; i++) {
    genre= prompt(`Ваш любимый жанр под номером ${i}`)  
    if (genre.trim().length==0 && genre.trim().length>50)  {
      i=i-1
    }
    personalMovieDB.genres.push(genre.trim())
  }
}

function showMyDB() {
  personalMovieDB.privat == false
    ? console.log(personalMovieDB)
    : console.log("this is privat");
}
