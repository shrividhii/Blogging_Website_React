import React from "react";
import { NavLink } from "react-router-dom"; 
import './index.css';

const Navbar = () => {
    return (
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <NavLink className="navbar-brand" to="/">Routing</NavLink> 
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mr-3">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/">Home</NavLink> 
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/about">About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/services">Services</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink    className="nav-link" to="/contact">Contact</NavLink>
                                    </li>          
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
