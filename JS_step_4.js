/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/


'use strict';
function doHomework4() {

  const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
  start: function() {
      this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
      while (this.count == "" || this.count == null || isNaN(this.count)) {
          this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
      }
  },
  toggleVisibleMyDB: function() {
      if (this.privat == true) {
          this.privat = false;
      } else {
          this.privat = true;
      }
  },
  writeYourGenre: function() {
      for (let i = 1; i < 4; i++) {
          let genre = prompt(`Ваш любимый жанр под номером ${i}`, "");
          if (genre == "" || genre == null) {
              i--;
          } else {
              this.genres[i - 1] = genre;
          }
      }
      this.genres.forEach((item, i) => {
          console.log(`Любимый жанр ${i + 1} - это ${item}`);
      });
      this.genres.forEach((item, i) => console.log(`Любимый жанр ${i + 1} - это ${item}`));
  },
  showMyDB: function(){
     this.privat == false
    ? console.log(personalMovieDB): console.log("this is privat");
   },
   countMovies: function(){
     if (+this.count < 10) {
    alert("Просмотрено довольно мало фильмов");
  } else if (+this.count >= 10 && +numberOfFilms < 30) {
    alert("Вы классический зритель");
  } else if (+this.count <= 30) {
    alert("Вы киноман");
  } else {
    alert("Произошла ошибка");
  }
   },
  watchLastMovie: function(){
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
    this.movies[lastFilm] = lastRate;
    }
   },
   askGenres: function(){
    let genre
    for (let i = 1; i < 4; i++) {
      genre= prompt(`Ваш любимый жанр под номером ${i}`)  
      if (genre.trim().length==0 && genre.trim().length>50)  {
        i=i-1
      }
      this.genres.push(genre.trim())
    }
  } 
};

  personalMovieDB.start();
  personalMovieDB.watchLastMovie();
  personalMovieDB.countMovies();
  personalMovieDB.askGenres();
  personalMovieDB.showMyDB();
}




