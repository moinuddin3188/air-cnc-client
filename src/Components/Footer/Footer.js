import React from 'react';
import './Footer.css';

const Footer = () => {
    const footer = ['ABOUT', 'COMMUNITY', 'HOST', 'SUPPORT'];
    return (
        <div className='footer'>
            <div className="container">
                <div className="row pt-5 pb-4">
                    {
                        footer.map(title =>
                            <div className="col-lg-3 col-md-4 col-6 mb-4 mb-lg-0">
                                <h6> {title} </h6>
                                <p>Lorem ipsum dolor sit amet consec.</p>
                                <p>Lorem ipsum dolor sit.</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem, ipsum dolor.</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        )
                    }
                </div>
                <p className='text-center'><small>Copyright 2021 Moin uddin</small></p>
            </div>
        </div>
    );
};

export default Footer;