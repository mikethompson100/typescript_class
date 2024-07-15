"use strict";
function GetReview(title) {
    if (title === 'A New Hope') {
        return 'An instant classic!';
    }
    else {
        return Math.floor(Math.random() * 10);
    }
}
function PrintMovieInfo(title, yearReleased) {
    console.log(`Title: ${title}`);
    if (yearReleased) {
        console.log(`Year Released: ${yearReleased}`);
    }
}
PrintMovieInfo('A New Hope');
PrintMovieInfo('A New Hope', 1977);
'';
