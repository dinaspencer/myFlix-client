import React from "react";
import { Button, Card } from 'react-bootstrap';
import './movie-view.scss';

export class MovieView extends React.Component {

    render() {
       const {movie, onBackClick} = this.props;
       return (
        <div className="movie-view">
            <div className="movie-poster">
                <img src={movie.ImagePath} width="200" />
            </div>
            <div className="movie-title">
                <span className="label">Title: </span>
                <span className="value">{movie.Title}</span>
            </div>
            <div className="movie-description">
                <span className="label">Description: </span>
                <span className="value">{movie.Description}</span>
            </div>
            <div className="movie-genre">
                <span className="label">Genre: </span>
                <span className="value">{movie.Genre.Name}</span>
                <br></br>
                <span className="label">Description: </span>
                <span className="value">{movie.Genre.Description}</span>
            </div>
            <div className="movie-director">
                <span className="label">Director: </span>
                <span className="value">{movie.Director.Name}</span>
                <br></br>
                <span className="label">Bio: </span>
                <span className="value">{movie.Director.Bio}</span>
                <br></br>
                <span className="label">Birth: </span>
                <span className="value">{movie.Director.Birth}</span>
            </div>
            <Button variant="primary" onClick={() => {onBackClick(null);}}>Back</Button>
        </div>
       );
    }
}