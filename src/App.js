import './App.css';
import React, {Component} from 'react';
import Login from './Component/login/login';
class App extends Component {
state = {user: '', password: ''};
render(){
return(
<div><Login username={this.state.user}
                               password={this.state.password}
                               error={this.state.error}
                               handleUsername={(event) => this.setState({user: event.target.value})}
                               handlePassword={(event) => this.setState({password: event.target.value})}
                               submit={() => {
                                   if (this.state.user === "user" &&
                                       this.state.password === "pass") 
                                        else {
                                       this.setState({error: 'Not Valid User'});
                                   } 
                               }
                               }
            /></div>
);
 }
}
export default App;

