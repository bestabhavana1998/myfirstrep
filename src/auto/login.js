import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, FormGroup, Label, Input, Button } from 'reactstrap';
class Login extends  React.Component{
    render() {
        return (
            <Form classname="App">
                <FormGroup>
                    <Label>UserName</Label>
                    <Input type="text" placeholder="UserName" size="10"></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type="password" placeholder="Password"></Input>
                </FormGroup>
                <Button>Submit</Button>
            </Form>
            );
    }
}
export default Login;