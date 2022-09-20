import React from "react";
import axios from "axios";

//import views
import { RegistrationView } from '../registration-view/registration-view';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

//import bootstrap
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";

import './main-view.scss';
 
export class MainView extends React.Component {

    constructor() {
        super();
        this.state = {
            movies: [],
            selectedMovie: null,
            user: null
        }
    }

    componentDidMount() {
        axios.get('https://dinaspencer-myflix.herokuapp.com/movies')
        .then(response => {
            this.setState({
                movies: response.data
            });
        })
        .catch(error => {
            console.log(error);
        });
    }

    setSelectedMovie(newSelectedMovie) {
        this.setState({
           selectedMovie: newSelectedMovie 
        });
    }

    onLoggedIn(user) {
        this.setState({
            user
        });
    }

    render() {

        const {movies, selectedMovie, user} = this.state;
        
        if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

        
        if (movies.length === 0) return <div className="main-view" />;

        return (
            <div className="main-view">
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Container fluid className="navBarContainer">
                        <Navbar.Brand href="#home">MyFlixMovies</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#">Profile</Nav.Link>
                                    <Nav.Link href="#">Search</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Container fluid className="mainViewContainer">
                {selectedMovie ? (
                <Row className="justify-content-md-center">
                    <Col md={9}>
                    <MovieView movie = {selectedMovie} onBackClick={newSelectedMovie => {this.setSelectedMovie(newSelectedMovie);}}/>
                    </Col>
                </Row>
                )
                :   (
                    <Container fluid>
                    <Row className="justify-content-md-center">
                        {movies.map(movie => (<Col xs={10} sm={6} lg={3} style={{paddingTop: "32px"}}><MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => {this.setSelectedMovie(movie) }} />
                    </Col>
                ))}
                </Row>
                </Container>
                    )   
                }
                </Container>
            </div>
        );
    }
 
}
