"use strict";

const numberOfFilms = +prompt("How many movies have you already seen?", "");

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt("One of the last movies you saw?", ""),
        b = prompt("How much would you rate it?", "");

    if(a != null && b !=null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Few movies seen");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('You\'re a classic viewer');
} else if(personalMovieDB.count >= 30) {
    console.log('You\'re a movie geek.');
} else  {
    console.log('Error');
}

console.log(personalMovieDB);



