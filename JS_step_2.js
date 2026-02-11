/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/
function doHomework2() {
   
   let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
   
   
   
   const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors: {},
    genres: [],
    privat: true
 }
 let lastFilm;
 let lastRate
 for (let i = 1; i <3; i++) {
   do{
      lastFilm =prompt('Один из последних просмотренных фильмов?', '');
      lastRate =prompt('На сколько оцените его?', '');
      console.log("LF",lastFilm.length,"LR",lastRate.length)
   }while (lastFilm.length==0 || lastFilm.length > 50 || lastRate.length==0);
   personalMovieDB.movies[lastFilm] = lastRate; 
 }
  if (+personalMovieDB.count<10) {
      alert("Просмотрено довольно мало фильмов");
   }else if (+personalMovieDB.count>=10 && +numberOfFilms<30) {
      alert("Вы классический зритель");
   }else if (+personalMovieDB.count<=30) {
      alert("Вы киноман");
   } else{
      alert("Произошла ошибка");
   }
 
console.log(personalMovieDB);


}