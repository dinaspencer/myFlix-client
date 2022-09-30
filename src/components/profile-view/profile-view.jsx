import React from "react";
import axios from "axios";
import "./profile-view.scss";
import { Container, Button, Card, Row, Col, Form, Figure } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUser, updateUser, deleteUser } from '../../actions/actions';

 class ProfileView extends React.Component {
  constructor() {
    super();
    this.state = {
      Username: null,
      Password: null,
      Email: null,
      Birthday: null,
      FavoriteMovies: [],
    };
  }

  onLoggedOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.setState({
      user: null,
    });
    window.open("/", "_self");
  }

  componentDidMount() {
    const accessToken = localStorage.getItem("token");
    this.getUserData(accessToken);
  }

  getUserData = (token) => {
    const Username = localStorage.getItem("user");

    axios
      .get(`https://dinaspencer-myflix.herokuapp.com/users/${Username}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        this.setState({
          Username: response.data.Username,
          Password: response.data.Password,
          Email: response.data.Email,
          Birthday: response.data.Birthday,
          FavoriteMovies: response.data.Favorite_Movies,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  editProfile = (e) => {
    e.preventDefault();
    const Username = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    axios
      .put(
        `https://dinaspencer-myflix.herokuapp.com/users/${Username}`,
        {
          Username: this.state.Username,
          Password: this.state.Password,
          Email: this.state.Email,
          Birthday: this.state.Birthday,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        this.setState({
          Username: response.data.Username,
          Password: response.data.Password,
          Email: response.data.Email,
          Birthday: response.data.Birthday,
        });
        localStorage.setItem("user", this.state.Username);
        const data = response.data;
        console.log(data);
        //console.log(this.state.Username);
        alert("Your profile has been updated successfully");
        window.open(`/users/${Username}`, "_self");
      })
      .catch(function (error) {
        console.log(error);
        //alert('Sorry, there was an error updating your profile');
      });
  };

  setUsername(value) {
    
    this.state.Username = value;
  }

  setPassword(value) {
    
    this.state.Password = value;
  }

  setEmail(value) {
    
    this.state.Email = value;
  }

  setBirthday(value) {
   
    this.state.Birthday = value;
  }

  deleteProfile() {
    const Username = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    axios
      .delete(`https://dinaspencer-myflix.herokuapp.com/users/${Username}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        alert("You have successfully deleted your profile!");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        window.open("/", "_self");
      })
      .catch(function (error) {
        console.log(error);
        alert("Unable to delete your profile, please try again.");
      });
  }

  removeFavorite = (e, movieId) => {
    e.preventDefault();
      const user = localStorage.getItem('user');
      const token = localStorage.getItem('token');
      
      console.log(this.props);

    
      axios.delete(`https://dinaspencer-myflix.herokuapp.com/users/${user}/movies/${movieId}`, {headers: {Authorization: `Bearer ${token}`}
  }).then((response) => {
      console.log(response);
      alert('You have removed the movie from your favorites.');
      this.componentDidMount();
  }).catch(function(error) {
      console.log(error);
      alert('Sorry, please try removing the favorite again.');
  });
  };

  render() {
    const { movies, removeFavorite } = this.props;
    const { Username, Password, Email, Birthday, FavoriteMovies } = this.state;
    console.log(this.state);
    return (
      <Container>
        <Row>
          <Col>
            <Card className="profile-view">
              <Card.Header className="profile-view-header">
                My Profile
              </Card.Header>
              <Card.Body className="profile-view-title">
                Username: {Username}
              </Card.Body>
              <Card.Body>Password: {Password}</Card.Body>
              <Card.Body>Email: {Email}</Card.Body>
              <Card.Body>Birthday: {Birthday}</Card.Body>
              
              <Card.Footer></Card.Footer>
            </Card>
          </Col>

          <Col sm={12}>
            <Card className="editprofile-view">
              <Card.Header className="profile-view-header">
                Update Profile
              </Card.Header>
              <Form>
                <Form.Group>
                  <Form.Label>Username: </Form.Label>
                  <Form.Control
                    type="text"
                    required
                    onChange={(e) => this.setUsername(e.target.value)}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Password: </Form.Label>
                  <Form.Control
                    type="password"
                    required
                    onChange={(e) => this.setPassword(e.target.value)}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Email: </Form.Label>
                  <Form.Control
                    type="email"
                    required
                    onChange={(e) => this.setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Birthday: </Form.Label>
                  <Form.Control
                    type="date"
                    onChange={(e) => this.setBirthday(e.target.value)}
                  />
                </Form.Group>
                <Card.Footer>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={(e) => this.editProfile(e)}
                  >
                    Update
                  </Button>

                  <Button
                    variant="danger"
                    className="delete-profile-button"
                    onClick={this.deleteProfile}
                  >
                    Delete Profile
                  </Button>
                </Card.Footer>
              </Form>
            </Card>
          </Col>

          <Col className="favorite-movies">
          <Card>
          <Card.Body>
            <Row>
              <Col sm={12}>
                <h4>My Favorite Movies</h4>
              </Col>
            </Row>
            <Row>
              {FavoriteMovies.map((ImagePath, Title, movie, _id) => {
                return (
                  <Col key={movie._id} className="fav-movie">
                    <Card>
                      <Link to={`/movies/${movie._id}`}>
                        <Card.Img src={ImagePath} alt={Title} />
                        <h2>{Title}</h2>
                      </Link>
                    
                    <Button
                      className="remove"
                      variant="warning"
                      onClick={this.removeFavorite}
                    >
                      Remove from Favorites
                    </Button>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Card.Body>
        </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    user: state.user,
    movies: state.movies,
  };
};

export default connect(mapStateToProps, { setUser, updateUser, deleteUser })(ProfileView);