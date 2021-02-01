import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './DashboardNav.css';
import Cookies from 'js-cookie';

const DashboardNav = () => {

    const [userInfo, setUserInfo] = useContext(UserContext);

    const logout = () => {
        setUserInfo({
            apply: false,
            night: 1,
            email: '',
            name: '',
            photo: '',
            admin: false
        })

        Cookies.remove('token')
    }

    return (
        <div className='d-lg-none d-block border-bottom'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">
                    <h3>Aircnc</h3>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        {
                            userInfo.admin ? (
                                null
                            ) : (
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/myRent">My Rent</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/review">Review</Link>
                                        </li>
                                    </>
                                )
                        }
                        {
                            userInfo.admin ? (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/dashboard">Bookings</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/addHome">Add Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/addExperience">Add Experience</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/addAdmin">Add Admin</Link>
                                    </li>
                                </>
                            ) : null
                        }
                        <li className="nav-item active">
                            <Link onClick={logout} className="nav-link" to="">Logout</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default DashboardNav;