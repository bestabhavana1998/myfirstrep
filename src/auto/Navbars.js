import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import './navbars.css'

class Navbars extends React.Component {

    render() {
        return(
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}
                <div>
                    <h4>AutoZone</h4>
                </div>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                       <li class="nav-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/register" className="nav-link">Register</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/autoparts" className="nav-link">Autoparts</Link>
                        </li>
                       
                        <li class="nav-item">
                            <Link to="/details" className="nav-link">Details</Link>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <b><Link id = "logout" to= "/login" className="nav-link">Logout</Link></b>
                    {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value = {this.state.searchName} onChange = {this.onChange} />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                    </form>
                    {/* {regLink} */}
                </div>
            </nav>
        )
    }
}
export default withRouter(Navbars);