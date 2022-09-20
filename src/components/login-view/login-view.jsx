import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { RegistrationView } from '../registration-view/registration-view';
import './login-view.scss';

export function LoginView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
        props.onLoggedIn(username);
    };


    return (
        
        <Card style={{margin: '80px', padding: '22px'}}>
        <Form>
            <Form.Group controlId="formUsername">
                <Form.Label>Username: </Form.Label>
                <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Label>Password: </Form.Label>
                <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Button style={{marginTop: '22px'}} variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
            <Button style={{marginTop: '22px', marginLeft: '22px'}} variant="secondary" type="button"         >New Here? Register</Button>
        </Form> 
        </Card>
    );
}