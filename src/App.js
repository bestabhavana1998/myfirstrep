import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, FormGroup, Label, Input} from 'reactstrap'

class Login extends React.Component {
  render() {
    return (
      <Form classname="App">
         <FormGroup>
           <Label>UserName</Label>
           <Input type="text" placeholder="UserName"></Input>
         </FormGroup>
         <FormGroup>
           <Label>Password</Label>
           <Input type="text" placeholder="Password"></Input>
           </FormGroup>
           </Form>
          );
}
}
export default Login;