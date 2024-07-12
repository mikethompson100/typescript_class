"use strict";
function GetReview(title) {
    if (title === 'A New Hope') {
        return 'An instant classic!';
    }
    else {
        return Math.floor(Math.random() * 10);
    }
}
let movieTitle = 'A New Hopee';
let movieReview = GetReview(movieTitle);
console.log(`Movie title: ${movieTitle}`);
if (typeof (movieReview) == 'string') {
    console.log(`Review: ${movieReview}`);
}
else {
    console.log(`Rating: ${movieReview}/10`);
}
