import React, { useEffect, useState } from 'react';
import './MeetHost.css';
import Navbar2 from '../../Home/Navbar/Navbar2';
import Pricing from '../Pricing/Pricing';
import Steps from '../Steps/Steps';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../Footer/Footer';


const MeetHost = () => {

    const step = 2;
    const { id3 } = useParams();
    const [home, setHome] = useState({})

    useEffect(() => {
        fetch(`https://secret-ridge-54673.herokuapp.com/details/${id3}`)
        .then(res => res.json())
        .then(data => setHome(data[0]))
    }, [])

    const { title, reviews, rating, price, host, img, hostImg } = home;

    return (
        <section>
            <section className="navbar-container">
                <Navbar2 />
            </section>
            <section className='container'>
                <Steps step={step} />
                <section className="row ml-2">
                    <div className="col-lg-7 col-12 mt-5 pl-0 meet-host">
                        <div className="row">
                            <div className='col-9'>
                                <h6>Travelling for work?</h6>
                                <p className='mt-3'>Say hello to your host</p>
                                <p>Let's {host} know a little about your self and why you are coming</p>
                                <textarea name="" id="" cols="50" rows="5" /> <br />
                                <Link to={`/payment/${id3}`}>
                                    <button className='continue-btn'>Continue</button>
                                </Link>
                            </div>
                            <div className='col-3 text-center'>
                                <img width="50%" src={hostImg} alt="" />
                                <p>{host}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-12 px-lg-5 mt-lg-0 mt-5 pl-0">
                        <Pricing
                            title={title}
                            reviews={reviews}
                            rating={rating}
                            price={price}
                            img={img}
                        />
                    </div>
                </section>
            </section>
            <Footer />
        </section>
    );
};

export default MeetHost;