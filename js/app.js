"use strict";
;
class Performer {
    constructor() {
        this.name = "";
        this.email = "";
        this.role = "";
    }
    rehearse(sceneNumber) {
        console.log(`${this.name} is rehearsing scene number ${sceneNumber}.`);
    }
    ;
}
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
function PrintMovieInfo(movie) {
    console.log(`Title: ${movie.title}`);
    console.log(`Director: ${movie.director}`);
    if (movie.yearReleased) {
        console.log(`Year Released: ${movie.yearReleased}`);
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
let myMovie = {
    title: 'Outlaw Josie Wales',
    director: 'Serge Leone',
    yearReleased: 1978,
    streaming: true,
    length: 133,
    logReview: (review) => console.log(`Review: ${review}`)
};
/* PrintMovieInfo(myMovie);

if (myMovie.logReview) {
    myMovie.logReview('Great epic!')
} */
let printReview;
printReview = (review) => console.log(`Viewer review: ${review}`);
printReview('I want to see it again!!!!!');
let favoriteCastMember = new Performer();
favoriteCastMember.name = 'Daisy';
favoriteCastMember.rehearse(25);
class Library {
    constructor(name) {
        this.name = name;
    }
}
Library.description = 'A source of knowledge';
let result = new Library('Michael');
console.log(result.name);
//console.log(result.description);
console.log(Library.description);
/*
class Video {
    title: string = '';
    year: number = 2024;

    constructor(){
        console.log('Creating a new Video...');
    }

    printItem(): void {
        console.log(`${this.title} was released in this year: ${this.year}`);
    }

};

let vid = new Video();
vid.title = 'A New Hope';
vid.year = 1977;
vid.printItem();
 */
class Video {
    get producer() {
        return this._producer.toUpperCase();
    }
    set producer(newProducer) {
        this._producer = newProducer;
    }
    constructor(newTitle, newYear) {
        this._producer = '';
        this.title = '';
        this.year = 2024;
        console.log('Creating a new Video...');
        this.title = newTitle;
        this.year = newYear;
    }
    printItem() {
        console.log(`${this.title} was released in this year: ${this.year}`);
        console.log(`Medium: ${Video.medium}`);
    }
}
Video.medium = 'Audio/Visual';
;
class Documentary extends Video {
    constructor(newTitle, newYear, subject) {
        super(newTitle, newYear);
        this.subject = subject;
    }
    printItem() {
        super.printItem();
        console.log(`Subject: ${this.subject} (${this.year})`);
    }
    printCredits() {
        console.log(`Producer: ${this.producer}`);
    }
}
let vid = new Documentary("How the Outlaws Started at WSAM", 2024, "Film history");
vid.producer = 'Sci-Fi Pictures';
vid.printCredits();
