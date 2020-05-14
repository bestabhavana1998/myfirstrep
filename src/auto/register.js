import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, FormGroup, Label, Input, Button } from 'reactstrap';
class Register extends  React.Component{
    render() {
        return (
            <Form classname="App">
                <FormGroup>
                    <Label>FirstName</Label>
                    <Input type="text" placeholder="Username" size="10"></Input>
                    <Label>LastName</Label>
                    <Input type="text" placeholder="Lastname" size="10"></Input>
                    <Label>New Password</Label>
                    <Input type="text" placeholder="Password"></Input>
                    <Label>PhoneNumber</Label>
                    <Input type="number" placeholder="Phoneno" size="10"></Input>
                    <Label>Address</Label>
                    <Input type="textarea" placeholder="Add" size="10"></Input>
                    
                </FormGroup>
                <Button>Sign Up</Button>
            </Form>
            );
    }
}
export default Register;