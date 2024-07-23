interface Movie {
    title: string,
    director: string,
    yearReleased: number,
    streaming: boolean,
    length?: number,
    logReview?: ReviewLogger
};

interface ReviewLogger {
    (review: string) : void;
}

function GetAllMovies(): Movie[] {
    return [
        {title: 'A New Hope', director: 'George Lucas', yearReleased: 1977, streaming: true},
        {title: 'Tombstone', director: 'George Lucas', yearReleased: 1993, streaming: false}
    ]
}

function GetReview(title: string): string | number {
    if (title === 'A New Hope') {
        return 'An instant classic!';
    } else {
        return Math.floor(Math.random() * 10);
    }
}

function PrintMovieInfo(movie: Movie) {

    console.log(`Title: ${movie.title}`);
    console.log(`Director: ${movie.director}`);

    if (movie.yearReleased) {
        console.log(`Year Released: ${movie.yearReleased}`);
    }
    
}

//PrintMovieInfo('A New Hope');
//PrintMovieInfo('A New Hope', 1977, "Mark Hamill", "Harrison Ford", "Carrie Fisher");

function GetTitles(director: string): string[];
function GetTitles(director: string, streaming: boolean): string[];
function GetTitles(director: string, streaming?: boolean): string[] {
    const allMovies = GetAllMovies();
    const searchResults: string[] = [];

    if(streaming !== undefined) {
        for(let movie of allMovies) {
            if(movie.director === director && movie.streaming === streaming) {
                searchResults.push(movie.title);
            }
        }
    }
    else {
        for(let movie of allMovies) {
            if(movie.director === director) {
                searchResults.push(movie.title);
            }
        }
    }
    return searchResults;
};

function createMovieID(name: string, id: number): string {
    return name + id;
}

let newID: string = createMovieID('jedi', 10);
console.log(newID);

let myMovie: Movie = {
    title: 'Outlaw Josie Wales',
    director: 'Serge Leone',
    yearReleased: 1978,
    streaming: true,
    length: 133,
    logReview: (review: string) => console.log(`Review: ${review}`)
};

/* PrintMovieInfo(myMovie);

if (myMovie.logReview) {
    myMovie.logReview('Great epic!')
} */

