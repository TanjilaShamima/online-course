import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../../images/logo.png';
import './Header.css';


const Header = () => {
    return (
        <div>
            <div className="header  bg-primary">
                <div className="container">
                    <nav class="navbar navbar-expand-lg navbar-light  bg-primary">
                        <a class="navbar-brand" href="#"><img className="logo" src={logo} alt=""/></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">HOME <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/courses">COURSES</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/my_courses" tabindex="-1" aria-disabled="true">MY COURSES</a>
                            </li>
                            </ul>
                            <form class="form-inline my-2 my-lg-0">
                                {/* <input class="form-control mr-sm-2" type="search" placeholder="Search"></input> */}
                                <button className="log-in" class="log-in btn btn-success my-2 my-sm-0" type="submit">Log In</button>
                                <button className="sign-up" class="sign-up btn btn-danger my-2 my-sm-0" type="submit">Sign Up</button>
                            </form>
                        </div> 
                    </nav>
                </div>
            </div>
        </div>
  
    );
}

export default Header;