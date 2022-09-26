import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './login-view.scss';
import { Link } from 'react-router-dom';

export function LoginView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ usernameErr, setUsernameErr ] = useState('');
    const [ passwordErr, setPasswordErr ] = useState('');

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
    } else if (password.length < 4) {
        setPasswordErr('Password must be at least 4 characters long');
        isReq = false;
    }
    return isReq;
}

    const handleSubmit = (e) => {
        e.preventDefault();
        const isReq = validate();
        if (isReq) {
        axios.post('https://dinaspencer-myflix.herokuapp.com/login', {
            Username: username,
            Password: password
        }).then(response => {
            const data = response.data;
            props.onLoggedIn(data);
        }).catch(e => {
            console.log('no such user')
        });  
    }
};

    return (
        <Container>
            <Row>
                <Col xs={12} md={10} lg={8} xl={8}>
                    <Card style={{marginTop: '120px', padding: '22px'}}>
                    <Form>
                        <Form.Group controlId="formUsername">
                            <Form.Label>Username: </Form.Label>
                            <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
                            {usernameErr && <p>{usernameErr}</p>}
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Password: </Form.Label>
                            <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
                            {passwordErr && <p>{passwordErr}</p>}
                        </Form.Group>
                        <Button style={{marginTop: '22px'}} variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
                        <Link to={"/register"}><Button style={{marginTop: '22px', marginLeft: '22px'}} variant="secondary" type="button"> New Here? Register</Button></Link>
                    </Form> 
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}