import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    return (
        <section className="container">
            <nav className="navbar navbar-expand-lg navbar-light px-0">
                <a className="navbar-brand" href="#">
                    <h2>Aircnc</h2>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span> <FontAwesomeIcon icon={faBars} /> </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ml-3 pt-2">
                            <a className="nav-link" href="#home">Host your home</a>
                        </li>
                        <li className="nav-item ml-3 pt-2">
                            <a className="nav-link" href="#footer">Host your experience</a>
                        </li>
                        <li className="nav-item ml-3 pt-2">
                            <a className="nav-link" href="#services">Help</a>
                        </li>
                        <li className="nav-item ml-3 pt-2">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item ml-3">
                            <Link className="nav-link" to="/login">
                                <button className='sign-up-btn bg'>Sign up</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;