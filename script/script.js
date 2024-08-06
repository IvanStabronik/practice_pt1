"use strict";

const numberOfFilms = +prompt("How many movies have you already seen?", "");

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
    privat: false
};

const a = prompt("One of the last movies you saw?", ""),
    b = prompt("How much would you rate it?", ""),
    c = prompt("One of the last movies you saw?", ""),
    d = prompt("How much would you rate it?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);