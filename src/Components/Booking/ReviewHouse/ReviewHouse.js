import React, { useContext, useEffect, useState } from 'react';
import './ReviewHouse.css';
import Navbar2 from '../../Home/Navbar/Navbar2';
import Steps from '../Steps/Steps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBabyCarriage, faPaw, faAngleDown, faSmoking, faBan } from '@fortawesome/free-solid-svg-icons';
import Pricing from '../Pricing/Pricing';
import { Link, useParams } from 'react-router-dom';
import { BulletList } from 'react-content-loader'
import { UserContext } from '../../../App';
import Footer from '../../Footer/Footer';


const ReviewHouse = () => {

    const step = 1;
    const { id2 } = useParams();

    const [collups, setCollups] = useState(false)

    const [userInfo, setUserInfo] = useContext(UserContext);
    const [home, setHome] = useState({});

    useEffect(() => {
        fetch(`https://secret-ridge-54673.herokuapp.com/details/${id2}`)
            .then(res => res.json())
            .then(data => setHome(data[0]))
    }, [])

    const { title, rules, reviews, rating, price, img } = home;

    return (
        <section>
            <div className="navbar-container">
                <Navbar2 />
            </div>
            <section className='container review-house'>
                <div className="row">
                    <div className="col-lg-7 col-12">
                        <Steps step={step} />
                        <div className="mt-5 ml-2">
                            <h3>Review House Rules</h3>
                            <p className='day-count'>3 nights in Dhaka</p>
                            <div className="row check-in-check-out-date border-bottom border-secondary mx-0">
                                <div className="col-6 d-flex pl-0">
                                    <div className='text-center date mr-2 d-flex align-items-center'>
                                        <p className='text-uppercase text-dark'>
                                            {
                                                userInfo.checkIn && new Date(userInfo.checkIn).toLocaleString('default', { month: 'short' }) ||
                                                new Date(new Date()).toLocaleString('default', { month: 'short' })
                                            }
                                            <br />
                                            {new Date(userInfo.checkIn).getDate() || new Date().getDate()}
                                        </p>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-center'>
                                        <div>
                                            <p>{new Date(userInfo.checkIn).toLocaleString('en-us', { weekday: 'long' }) || new Date().toLocaleString('en-us', { weekday: 'long' })} Check-in</p>
                                            <p>After 12:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 d-flex pl-0">
                                    <div className='text-center date mr-2 d-flex align-items-center'>
                                        <p className='text-uppercase text-dark'>
                                            {
                                                userInfo.checkIn && new Date(userInfo.checkOut).toLocaleString('default', { month: 'short' }) ||
                                                new Date(new Date()).toLocaleString('default', { month: 'short' })
                                            }
                                            <br />
                                            {new Date(userInfo.checkOut).getDate() || new Date().getDate() + 1}
                                        </p>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-center'>
                                        <div>
                                            <p>{new Date(userInfo.checkOut).toLocaleString('en-us', { weekday: 'long' }) || new Date().toLocaleString('en-us', { weekday: 'long' })} Check-out</p>
                                            <p>After 12:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                                <p className='my-4'>Self Check-in with building staff</p>
                            </div>
                            <div>
                                <p className='day-count mt-2'>Things to keep in mind</p>
                                <div className='rules'>
                                    {rules ?
                                        rules && rules.map((rule, index) =>
                                            <p className='d-flex align-items-center' key={index}>
                                                <FontAwesomeIcon
                                                    className={rule.icon == 'smoking' ? 'smoking-icon rule-icon mr-2' : 'rule-icon mr-2'}
                                                    icon={
                                                        rule.icon === 'carrier' && faBabyCarriage ||
                                                        rule.icon === 'pet' && faPaw ||
                                                        rule.icon === 'party' && faBan ||
                                                        rule.icon === 'smoking' && faSmoking
                                                    }
                                                />
                                                <span>{rule.description}</span>
                                            </p>
                                        )
                                        :
                                        <BulletList />
                                    }
                                    <p style={{ display: !collups && 'none' }}>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
                                        autem ullam fuga debitis consequatur. Temporibus sapiente mollitia
                                        consequatur laborum, excepturi aspernatur ipsum assumenda explicabo,
                                        delectus, possimus veritatis corrupti est quasi.
                                    </p>
                                    <p
                                        onClick={() => setCollups(!collups)}
                                        className="read-more"
                                    >
                                        {collups ? "Read less" : "Read more"}
                                        <FontAwesomeIcon
                                            className="ml-2"
                                            style={{ transform: collups && 'rotate(180deg)' }}
                                            icon={faAngleDown}
                                        />
                                    </p>
                                </div>
                            </div>
                            <Link to={`/host/${id2}`}>
                                <button className='continue-btn'>Agree and continue</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-5 col-12 mt-5 px-lg-5 pt-lg-5 pt-0">
                        <Pricing
                            title={title}
                            price={price}
                            reviews={reviews}
                            rating={rating}
                            img={img}
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </section>
    );
};

export default ReviewHouse;