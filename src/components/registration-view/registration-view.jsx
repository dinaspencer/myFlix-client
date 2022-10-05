import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Card, CardGroup, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createUser } from '../../actions/actions';
import './registration-view.scss';

 function RegistrationView() {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail] = useState('');
    const [ birthday, setBirthday] = useState('');
    const [ usernameErr, setUsernameErr ] = useState('');
    const [ passwordErr, setPasswordErr ] = useState('');
    const [ emailErr, setEmailErr ] = useState('');
    const [ birthdayErr, setBirthdayErr ] = useState('');
   

    const validate = () => {
        let isReq = true;
        if(!username) {
            setUsernameErr('Username required');
            isReq = false;
        } else if (username.length < 2) {
            setUsernameErr('Username must be at least 2 characters long');
            isReq = false;
        }
        if(!password) {
            setPasswordErr('Password required');
            isReq = false;
        } else if (password.length<6) {
            setPasswordErr('Password must be at least 6 characters long');
            isReq = false;
        }
        if(!email) {
            setEmailErr('Please enter a valid email address');
            isReq = false;
        } else if (email.indexOf('@')===-1) {
            setEmailErr('Please enter a valid email address');
            isReq = false;
        }
        if(!birthday) {
            setBirthdayErr('Please enter your birthdate');
            isReq = false;
        }
        return isReq;
    }

    const handleRegister = (e) => {
        e.preventDefault();
        this.props.dispatch({type: 'CREATE_USER'});

        const isReq = validate();
        if(isReq) {
        axios.post('https://dinaspencer-myflix.herokuapp.com/registration', {
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday
        }).then(response => {
            this.props.setUser = response.data;
            console.log(data);
            alert('Registration successful, please log in');
            window.open('/', '_self');
        }).catch(response => {
            console.error(response);
            alert('Sorry, there was an error with your registration');
        });
        
        }
    };

    return (
       
        <Container className="registration-view">
            <Row>
                <Col sm={12}>
                    <CardGroup>
                        <Card>
                            <Card.Body>
                            <Form>
                                <Form.Group>
                                <Form.Label>Username: </Form.Label>   
                                <Form.Control 
                                type="text"
                                value={username} 
                                onChange={e => setUsername(e.target.value)}
                                required
                                placeholder="Please enter a username" />
                                {usernameErr && <p>{usernameErr}</p>}
                                </Form.Group>
                                <Form.Group>
                                <Form.Label>Password: </Form.Label> 
                                <Form.Control 
                                type="password"  
                                value={password} 
                                onChange={e => setPassword(e.target.value)}
                                required
                                minLength='6'
                                placeholder="Your password should contain at least 6 characters" />
                                {passwordErr && <p>{passwordErr}</p>}
                                </Form.Group>
                                <Form.Group>
                                <Form.Label>Email: </Form.Label> 
                                <Form.Control 
                                type="email"  
                                value={email} 
                                onChange={e => setEmail(e.target.value)}
                                required
                                placeholder="Enter your email address" />
                                {emailErr && <p>{emailErr}</p>}
                                </Form.Group>
                                <Form.Group>
                                <Form.Label>Birthday: </Form.Label>
                                <Form.Control 
                                type="date" 
                                value={birthday} 
                                onChange={e => setBirthday(e.target.value)}
                                required />
                                {birthdayErr && <p>{birthdayErr}</p>}
                                </Form.Group>
                                <Button variant="primary" type="submit" onClick={handleRegister}>Submit</Button> 
                            </Form>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Col>
             </Row>
        </Container>
        
    );
    }


const mapStateToProps = (state) => ({
    Username: state.username,
    Password: state.password,
    Email: state.email,
    Birthday: state.birthday
})
 
export default connect(mapStateToProps, { createUser })(RegistrationView);