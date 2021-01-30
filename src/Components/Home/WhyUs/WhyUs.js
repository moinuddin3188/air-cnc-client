import React from 'react';
import './WhyUs.css';
import img from '../../../images/apartment 1.png';
import img2 from '../../../images/affordable 1.png';
import img3 from '../../../images/lessee 1.png';

const WhyUs = () => {
    return (
        <section className='why-us container'>
            <h3 className='text-center'>Why us?</h3>
            <div className="row">
                <div className="col-md-4 col-6 text-center px-md-5 mb-4 mb-md-0">
                    <img width="57px" src={img} alt=""/>
                    <h5>Wide Range of Properties</h5>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione et. Lorem ipsum dolor sit amet adipisicing.</p>
                </div>
                <div className="col-md-4 col-6 text-center px-md-5 mb-4 mb-md-0">
                    <img width="57px" src={img2} alt=""/>
                    <h5>Financing Made Easy</h5>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione et. Lorem ipsum dolor sit amet adipisicing.</p>
                </div>
                <div className="col-md-4 col-6 text-center px-md-5 mb-4 mb-md-0">
                    <img width="57px" src={img3} alt=""/>
                    <h5>Trusted by Thousands</h5>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione et. Lorem ipsum dolor sit amet adipisicing.</p>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;