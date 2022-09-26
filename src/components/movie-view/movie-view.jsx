import React from "react";
import axios from "axios";
import { Button, Col, Row, Card, Container } from 'react-bootstrap';
import './movie-view.scss';
import { Link } from 'react-router-dom';

export class MovieView extends React.Component {
    constructor() {
        super();
        this.state= {};
    }

    addFavoriteMovie(e) {
        const { movie } = this.props;
        e.preventDefault();
        axios
          .post(
            `https://dinaspencer-myflix.herokuapp.com/users/${localStorage.getItem(
              "user"
            )}/Movies/${movie._id}`,
            { username: localStorage.getItem("user") },
            {
              headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            }
          )
          .then((res) => {
            alert(`${movie.Title} successfully added to your favorites`);
          })
         
          .then((res) => {
            document.location.reload(true);
          })
          .catch((error) => {
            alert(`${movie.Title} was not added to favorites.` + error);
          });
      }

    render() {
       const {movie, onBackClick} = this.props;
       return (
        <Container>
            <Card className="movie-view">
                <Card.Header>
                    <Card.Img variant="top" src={movie.ImagePath} />
                </Card.Header>
                <Card.Body className="movie-Title">
                    <h1>{movie.Title}</h1>
                </Card.Body>
                <Card.Body>
                <Link to={`/genres/${movie.Genre.Name}`}>
                    <Button variant="link">
                <span className="label">Genre: </span>
                <span className="value">{movie.Genre.Name}</span>
                </Button></Link>
                <br></br>
                <Link to={`/directors/${movie.Director.Name}`}>
                    <Button variant="link">
                <span className="label">Director: </span>
                <span className="value">{movie.Director.Name}</span></Button></Link>
                </Card.Body>
                <Card.Body>
                    {movie.Description}
                </Card.Body>
                <Card.Footer>
                <Button variant="primary" onClick={() => {onBackClick();}}>Back</Button>
                <Button style={{marginLeft:"32px"}} variant="warning" className="favorite-button" value={movie._id} onClick={(e)=> this.addFavoriteMovie(e, movie)}>Add to Favorites</Button>
                </Card.Footer>
        </Card>
        </Container>
       );
    }
}