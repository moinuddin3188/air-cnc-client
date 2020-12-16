import React, { useContext, useState } from 'react';
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import Guest from './Guest';


const Search = () => {

    const [userInfo, setUserInfo] = useContext(UserContext);

    const [showBox, setShowBox] = useState(false);

    const handleBlur = e => {
        const newUserInfo = { ...userInfo };
        newUserInfo[e.target.name] = e.target.value;
        setUserInfo(newUserInfo);
    }

    const history = useHistory();

    const handleSearch = (e) => {
        if (userInfo.location) {
            history.push(`/search-result/${userInfo.location} ${userInfo.guest}`);
        }

        e.preventDefault();
    }

    return (
        <div className='col-lg-4 col-12'>
            <div className="search-box">
                <h6 className="mb-4">Where do you want to go?</h6>
                <div className="input-container mb-3">
                    <p className='location'>LOCATION</p>
                    <input
                        onBlur={handleBlur}
                        name="location"
                        type="text"
                        placeholder="Add city or Address" required
                    />
                </div>
                <div className='row'>
                    <div className="col-6 pr-2">
                        <div className="input-container">
                            <p>Arrival</p>
                            <input
                                onBlur={handleBlur}
                                name="checkIn"
                                type="date"
                                dateformat="dd/mm/yyyy"
                            />
                        </div>
                    </div>
                    <div className="col-6 pl-2">
                        <div className="input-container">
                            <p>Departure</p>
                            <input
                                onBlur={handleBlur}
                                name="checkOut"
                                type="date"
                                dateformat="dd/mm/yyyy"
                            />
                        </div>
                    </div>
                </div>
                <div className="guest mt-3">
                    <div className="row pb-3">
                        <div className="col-10">
                            <span className='condition'>Guest</span>
                            <p>
                                <span>{userInfo.apply ? userInfo.adults : 0}</span>
                                <span> ADULTS,</span>
                                <span> {userInfo.apply ? userInfo.childe : 0}</span>
                                <span> CHILDE</span>
                                <span style={{ display: userInfo.apply === false && 'none' }}>, {userInfo.apply ? userInfo.babes : 0} BABES</span>
                            </p>
                        </div>
                        <div className="col-2 text-right d-flex align-items-center">
                            <FontAwesomeIcon
                                style={{ transform: showBox && 'rotate(180deg)', cursor: 'pointer' }}
                                onClick={() => setShowBox(!showBox)}
                                className='ml-2'
                                icon={faAngleDown}
                            />
                        </div>
                    </div>
                    <div className={showBox ? 'show-box' : 'hide'}>
                        <Guest />
                    </div>
                </div>
                <button onClick={handleSearch} className='search-btn'>Search</button>
            </div>
        </div>
    );
};

export default Search;