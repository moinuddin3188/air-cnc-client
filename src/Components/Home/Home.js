import React from 'react';
import Footer from '../Footer/Footer';
import Experience from './Experiences/Experience';
import './Home.css';
import Homes from './Homes/Homes';
import Navbar from './Navbar/Navbar';
import Search from './Search/Search';
import WhyUs from './WhyUs/WhyUs';

const Home = () => {
    return (
        <main>
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
            <WhyUs />
            <Footer />
        </main>
    );
};

export default Home;