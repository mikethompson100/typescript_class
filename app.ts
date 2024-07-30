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

interface Person {
    name: string;
    email: string;
}

interface Director extends Person {
    numMoviesDirected: number;
}

interface CastMember extends Person {
    role: string;
    rehearse: (sceneNumber: number) => void;
}

class Performer implements CastMember {
    name: string = "";
    email: string = "";
    role: string = "";
    rehearse (sceneNumber: number) : void {
        console.log(`${this.name} is rehearsing scene number ${sceneNumber}.`);
    };
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

let printReview: ReviewLogger;
printReview = (review: string) => console.log(`Viewer review: ${review}`);
printReview('I want to see it again!!!!!');


let favoriteCastMember: CastMember = new Performer();
favoriteCastMember.name = 'Daisy';
favoriteCastMember.rehearse(25);

class Library {
    constructor(public name: string) {    }
    static description: string = 'A source of knowledge';
}

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

    private _producer: string = '';
    static medium: string = 'Audio/Visual';

    get producer(): string {
        return this._producer.toUpperCase();
    }

    set producer(newProducer:string) {
        this._producer = newProducer;
    }

    title: string = '';
    private year: number = 2024;

    constructor(newTitle: string, newYear: number){
        console.log('Creating a new Video...');
        this.title = newTitle;
        this.year = newYear;
    }

    printItem(): void {
        console.log(`${this.title} was released in this year: ${this.year}`);
        console.log(`Medium: ${Video.medium}`);
    }

};

let vid = new Video('A New Hope', 1977);
vid.printItem();

vid.producer = "Sci Fi";
console.log(vid.producer);
