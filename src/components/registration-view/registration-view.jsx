import React, { useState } from 'react';
import { Form, Button, Card, CardGroup, Row, Col } from 'react-bootstrap';
import './registration-view.scss';

export function RegistrationView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail] = useState('');
    const [ birthday, setBirthday] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password, email, birthday);
        props.onRegistration(username);
    };

    return (
        <div class="registration-view">
        <Container>
            <Row>
                <Col>
                    <CardGroup>
                        <Card>
                            <CardBody>
                            <Form>
                                <Form.Group>
                                <Form.Label>Username: </Form.Label>   
                                <Form.Control 
                                type="text"
                                value={username} 
                                onChange={e => setUsername(e.target.value)}
                                required
                                placeholder="Please enter a username" />
                                </Form.Group>
                                <Form.Group>
                                <Form.Label>Password: </Form.Label> 
                                <Form.Control 
                                type="password"  
                                value={password} 
                                onChange={e => setPassword(e.target.value)}
                                required
                                minlength='8'
                                placeholder="Your password should contain at least 8 characters" />
                                </Form.Group>
                                <Form.Group>
                                <Form.Label>Email: </Form.Label> 
                                <Form.Control 
                                type="email"  
                                value={email} 
                                onChange={e => setEmail(e.target.value)}
                                required
                                placeholder="Enter your email address" />
                                </Form.Group>
                                <Form.Group>
                                <Form.Label>Birthday: </Form.Label>
                                <Form.Control 
                                type="date" 
                                value={birthday} 
                                onChange={e => setBirthday(e.target.value)}
                                required />
                                </Form.Group>
                                <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button> 
                            </Form>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </Col>
             </Row>
        </Container>
        </div>
    );
}