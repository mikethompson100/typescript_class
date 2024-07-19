function GetAllMovies() {
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

function PrintMovieInfo(title: string, yearReleased: number, ...cast: string[]) {

    console.log(`Title: ${title}`);

    if (yearReleased) {
        console.log(`Year Released: ${yearReleased}`);
    }
    console.log('Cast:');

    for (const name of cast){
        console.log(`- ${name}`);
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

let movies: string[] = GetTitles('George Lucas', false);
movies.forEach(title => console.log(title));

