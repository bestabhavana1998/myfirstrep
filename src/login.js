import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
import Page2 from './page2';

class Login extends React.Component {
  render() {
    return (
      <Form classname="App">
   <FormGroup>
             <h1>LOGIN SCREEN</h1>
           <Label>UserName</Label>
           <Input type="text" placeholder="UserName"></Input>
         </FormGroup>
         <FormGroup>
           <Label>Password</Label>
           <Input type="text" placeholder="Password"></Input>
           </FormGroup>
    <Button>LOGIN</Button>
          
          <br></br>
          <br></br>
          <p><u>Forgot password?</u></p>
     
 <Page2>

 </Page2>
         </Form>
          );
}
}
export default Login;