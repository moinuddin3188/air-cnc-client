import React, { useEffect, useState } from 'react';
import './Payment.css';
import Navbar2 from '../../Home/Navbar/Navbar2';
import Pricing from '../Pricing/Pricing';
import Steps from '../Steps/Steps';
import { useParams } from 'react-router-dom';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';
import SplitForm from './PaymentForm';
import Footer from '../../Footer/Footer';

const stripePromise = loadStripe('pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG');


const Payment = () => {

    const step = 3;
    const { id4 } = useParams();
    const [home, setHome] = useState({})

    useEffect(() => {
        fetch(`https://secret-ridge-54673.herokuapp.com/details/${id4}`)
            .then(res => res.json())
            .then(data => setHome(data[0]))
    }, [])

    const { title, reviews, rating, price, host, img } = home;


    return (
        <section>
            <section className="navbar-container">
                <Navbar2 />
            </section>
            <section className='container'>
                <Steps step={step} />
                <div className="row">
                    <div className="col-lg-7 col-12 mt-5">
                        <h6 className='mb-2'>Payment section</h6>
                        <div className="payment">
                            <input className='mr-2' type="radio" name="payment" id="payPal" required />
                            <label className='payment-on' for="payPal">Credit Card</label>
                            <p className='mb-4'>Safe money transfer using uer Credit card, Master Card, Visa, Discover, American Express.</p>
                            <div className='credit-card'>
                                <Elements stripe={stripePromise}>
                                    <SplitForm />
                                </Elements>
                            </div>
                        </div>
                        <div className="mt-4 payment">
                            <input className='mr-2' type="radio" name="payment" id="payPal" required />
                            <label className='payment-on' for="payPal">PayPal</label>
                            <p>You will be redirected to payPal website to complete your payment</p>
                        </div>
                        <div className="text-right">
                            <button className="continue-btn">Continue to pay</button>
                        </div>
                    </div>
                    <div className="col-lg-5 col-12 px-lg-5 mt-lg-0 mt-5">
                        <Pricing
                            title={title}
                            reviews={reviews}
                            rating={rating}
                            price={price}
                            img={img}
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </section>
    );
};

export default Payment;