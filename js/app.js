"use strict";
function GetAllMovies() {
    return [
        { title: 'A New Hope', director: 'George Lucas', yearReleased: 1977, streaming: true },
        { title: 'Tombstone', director: 'George Lucas', yearReleased: 1993, streaming: false }
    ];
}
function GetReview(title) {
    if (title === 'A New Hope') {
        return 'An instant classic!';
    }
    else {
        return Math.floor(Math.random() * 10);
    }
}
function PrintMovieInfo(title, yearReleased, ...cast) {
    console.log(`Title: ${title}`);
    if (yearReleased) {
        console.log(`Year Released: ${yearReleased}`);
    }
    console.log('Cast:');
    for (const name of cast) {
        console.log(`- ${name}`);
    }
}
function GetTitles(director, streaming) {
    const allMovies = GetAllMovies();
    const searchResults = [];
    if (streaming !== undefined) {
        for (let movie of allMovies) {
            if (movie.director === director && movie.streaming === streaming) {
                searchResults.push(movie.title);
            }
        }
    }
    else {
        for (let movie of allMovies) {
            if (movie.director === director) {
                searchResults.push(movie.title);
            }
        }
    }
    return searchResults;
}
;
function createMovieID(name, id) {
    return name + id;
}
let newID = createMovieID('jedi', 10);
console.log(newID);
