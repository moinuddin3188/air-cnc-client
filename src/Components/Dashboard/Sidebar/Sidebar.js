import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.css';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHotel, faHome, faUser, faFileAlt, faCog, faSignOutAlt, faPlus } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../../App';
import Cookies from 'js-cookie';


const Sidebar = () => {

    const [userInfo, setUserInfo] = useContext(UserContext)

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

    const history = useHistory()
    const goHome = () => {
        history.push('/')
    }

    return (
        <div className='col-2 sidebar pr-0 d-none d-lg-block'>
            <section className='d-flex flex-column pr-0'>
                <div className='col pl-0 pr-0'>
                    <h3 onClick={goHome} style={{ cursor: 'pointer' }} >Aircnc</h3>
                    <NavLink to='/' class="text-decoration-none">
                        <p className=''>
                            <FontAwesomeIcon className='dashboard-icon' icon={faHome} />
                            Home
                        </p>
                    </NavLink>
                    {
                        userInfo.admin ? (
                            null
                        ) : (
                                <>
                                    <NavLink to='/myRent' class="text-decoration-none">
                                        <p className=''>
                                            <FontAwesomeIcon className='dashboard-icon' icon={faHotel} />
                                        My Rent
                                        </p>
                                    </NavLink>
                                    <NavLink to='/review' class="text-decoration-none">
                                        <p className=''>
                                            <FontAwesomeIcon className='dashboard-icon' icon={faUser} />
                                            Review
                                        </p>
                                    </NavLink>
                                </>
                            )
                    }
                    {
                        userInfo.admin ? (
                            <>
                                <NavLink to='/dashboard' class="text-decoration-none active">
                                    <p className=''>
                                        <FontAwesomeIcon className='dashboard-icon' icon={faFileAlt} />
                                        Bookings
                                    </p>
                                </NavLink>
                                <NavLink to='/addHome' class="text-decoration-none">
                                    <p className=''>
                                        <FontAwesomeIcon className='dashboard-icon' icon={faPlus} />
                                        Add Home
                                    </p>
                                </NavLink>
                                <NavLink to='/addExperience' class="text-decoration-none">
                                    <p className=''>
                                        <FontAwesomeIcon className='dashboard-icon' icon={faPlus} />
                                        Add Experience
                                    </p>
                                </NavLink>
                                <NavLink to='/addAdmin' class="text-decoration-none">
                                    <p className=''>
                                        <FontAwesomeIcon className='dashboard-icon' icon={faPlus} />
                                        Add Admin
                                    </p>
                                </NavLink>
                            </>
                        ) : null
                    }
                </div>
                <div className='d-flex align-items-end'>
                    <p className='' onClick={logout}>
                        <FontAwesomeIcon className='dashboard-icon' icon={faSignOutAlt} />
                        Sign out
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Sidebar;