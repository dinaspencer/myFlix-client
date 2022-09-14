import React from "react";
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
 
export class MainView extends React.Component {

    constructor() {
        super();
        this.state = {
            movies: [
                {_id: 1, Title: 'Knocked Up', Description: 'Knocked Up is a 2007 American romantic comedy film written, co-produced and directed by Judd Apatow, and starring Seth Rogen, Katherine Heigl, Paul Rudd, and Leslie Mann. It follows the repercussions of a drunken one-night stand between a slacker and a recently promoted media personality that results in an unintended pregnancy.', ImagePath: 'http://www.freemovieposters.net/posters/knocked_up_2007_727_poster.jpg'},
                {_id: 2, Title: 'Amelie', Description: 'Amélie, also known as The Fabulous Destiny of Amélie Poulain, is a 2001 French-language romantic comedy film directed by Jean-Pierre Jeunet. The film is a whimsical depiction of contemporary Parisian life, set in Montmartre. It tells the story of a shy waitress, played by Audrey Tautou, who decides to change the lives of those around her for the better while dealing with her own isolation.', ImagePath: 'https://m.media-amazon.com/images/M/MV5BNDg4NjM1YjMtYmNhZC00MjM0LWFiZmYtNGY1YjA3MzZmODc5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg'},
                {_id: 3, Title: 'Eternal Sunshine of the Spotless Mind', Description: 'Eternal Sunshine of the Spotless Mind is a 2004 American romantic science fiction drama film written by Charlie Kaufman, directed by Michel Gondry, and starring Jim Carrey and Kate Winslet. Pierre Bismuth created the story with Kaufman and Gondry. The film features an ensemble supporting cast that includes Kirsten Dunst, Mark Ruffalo, Elijah Wood, and Tom Wilkinson. The title of the film is a quotation from the 1717 poem Eloisa to Abelard by Alexander Pope. The picture uses elements of psychological drama, science fiction and a nonlinear narrative to explore the nature of memory and romantic love.', ImagePath: 'https://m.media-amazon.com/images/M/MV5BZTg3ODg2MzMtZmRmYy00ZWUwLTk5Y2QtOThmOTY1ZWZjZmJlXkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_.jpg'}
            ],
            selectedMovie: null
        }
    }

    setSelectedMovie(newSelectedMovie) {
        this.setState({
           selectedMovie: newSelectedMovie 
        });
    }

    render() {
        const {movies, selectedMovie} = this.state;
        if (movies.length === 0) return <div className="main-view">The list is empty!</div>;

        return (
            <div className="main-view">
                {selectedMovie ? <MovieView movie = {selectedMovie} onBackClick={newSelectedMovie => {this.setSelectedMovie(newSelectedMovie);}}/>
                : movies.map(movie => (<MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => {this.setSelectedMovie(movie) }} />
                ))
        }
            </div>
        );
    }
}
