import React from 'react';
import Experience from './Experiences/Experience';
import './Home.css';
import Homes from './Homes/Homes';
import Navbar from './Navbar/Navbar';
import Search from './Search/Search';

const Home = () => {
    return (
        <div className='pb-4'>
            <section className="navbar-container">
                <Navbar />
            </section>
            <section className="container">
                <div className="row">
                    <Search />
                    <div className='col-lg-8 col-12 experience pr-0'>
                        <Experience />
                        <Homes />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;