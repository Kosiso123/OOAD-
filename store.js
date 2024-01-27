console.log('welcome to lovekay movie rental')

class MovieShop{
    constructor(){
        this.numberOfmovie = [];
        this.tittle= 'The choosen, Breakthrough, I am gabreil';

    }

    addMovie(four){
        this.numberOfmovie.push(four)
        console.log(`${four} movies has been added`)
    }
    
    static newMovies = "prigrimage, war room, overcomer,Away"

    displaymovies(){
        console.log(`${this.tittle},prigrimage,war room, overcomer, away , are available movies` )
    }
    rentMovie(tittle){
        const movie = this.tittle.find((movie) =>movie.tittle === tittle);
        

        if (movie){
            movie.rentmovie();
            console.log('thanks for renting our movie')

        } else {
            console.log(`sorry ${tittle} is not available in the shop.`);
        }

        
    }
}
const movieshop = new MovieShop;
movieshop.addMovie("New four");
movieshop.displaymovies("newMovies")
console.log(movieshop, MovieShop);
