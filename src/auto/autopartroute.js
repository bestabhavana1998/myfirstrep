import Navbars from './Navbars';
import React from 'react';
import {  BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './login';
import Detailing from './details';
import Autoparting from './autoparts';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './register';
import Newdata from './newdata';
class AutopartsRouting extends React.Component{
    render() {
        return (
            <div>
                <Router>
                    <Navbars></Navbars>
                    <Route exact path="/" component = {Newdata}></Route>
                    <div>
                        <Route exact path ="/login" component= {Login}></Route>
                        <Route exact path="/register" component= {Register}></Route>
                    <Route exact path ="/autoparts" component= {Autoparting}></Route>
                        <Route exact path ="/details" component= {Detailing}></Route>
                       </div>
            </Router>
            </div>
        );
    }
}
export default AutopartsRouting;