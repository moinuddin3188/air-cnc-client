import React, { useContext } from 'react';
import './Navbar2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from 'react-router-dom';
import { DateRangePicker } from 'rsuite';
import { Popover, Whisper } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import Guest from '../Search/Guest';
import { UserContext } from '../../../App';
import Cookies from 'js-cookie';


const Navbar2 = () => {

    const [userInfo, setUserInfo] = useContext(UserContext);

    const getNight = (start, end) => {
        for (var arr = [], dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1)) {
            arr.push(new Date(dt).toLocaleDateString());
        }
        return arr;
    };

    const dates = (value) => {
        const checkIn = new Date(value[0] ? value[0] : new Date());
        checkIn.setDate(checkIn.getDate() + 1);
        const checkInDate = checkIn.toISOString().substr(0, 10);

        const checkOut = new Date(value[1] ? value[1] : new Date());
        checkOut.setDate(checkOut.getDate() + 1);
        const checkOutDate = checkOut.toISOString().substr(0, 10);

        setUserInfo({ ...userInfo, checkIn: checkInDate, checkOut: checkOutDate })
    }

    const night = getNight(new Date(userInfo.checkIn), new Date(userInfo.checkOut));

    const handleBlur = e => {
        setUserInfo({ ...userInfo, location: e.target.value });
    }

    const history = useHistory();

    const handleSearch = (e) => {
        if (userInfo.location) {
            history.push(`/search-result/${userInfo.location} ${userInfo.guest}`);
        }

        setUserInfo({ ...userInfo, night: night.length })

        e.preventDefault();
    }

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

    const speaker = (
        <Popover title="Guests" className="add-guest" style={{ width: '250px' }}>
            <Guest />
        </Popover>
    );

    return (
        <section className="container">
            <nav className="navbar navbar-expand-lg navbar-light px-0 navbar-2">
                <Link className="navbar-brand" to="/">
                    <h2>Aircnc</h2>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className=""> <FontAwesomeIcon icon={faBars} /> </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="ml-lg-auto d-flex">
                        <div>
                            <div className="search-option d-flex">

                                <div className='border-right text-center d-flex align-items-center'>
                                    <input
                                        onBlur={handleBlur}
                                        name="location"
                                        type="text"
                                        placeholder='Dhaka'
                                    />
                                </div>
                                <div className='border-right text-center'>
                                    <DateRangePicker
                                        onOk={dates}
                                        showOneCalendar
                                        placement="autoVertical"
                                        cleanable={false}
                                        placeholder="Check in - Check out"
                                        appearance="subtle"
                                    />
                                </div>
                                <div className='border-right text-center'>
                                    <Whisper
                                        trigger="click"
                                        speaker={speaker}
                                        placement="bottom"
                                    >
                                        <p>{userInfo.guest} Guest</p>
                                    </Whisper>
                                </div>
                                <div onClick={handleSearch}>
                                    <p> <FontAwesomeIcon color="#86f244" icon={faSearch} /> </p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <ul className="navbar-nav ml-lg-auto">
                        <li className="nav-item pt-2">
                            {
                                userInfo.email ? (
                                    <Link onClick={logout} className="nav-link" to="">Logout</Link>
                                ) : (
                                        <Link className="nav-link" to="/login">Login</Link>
                                    )
                            }
                        </li>
                        <li className="nav-item ml-lg-3">
                            {
                                userInfo.email ? (
                                    null
                                ) : (
                                        <Link className="nav-link" to="/login">
                                            <button className='sign-up-btn bg'>Sign up</button>
                                        </Link>
                                    )
                            }
                        </li>
                    </ul>
                </div>
            </nav >
        </section >
    );
};

export default Navbar2;