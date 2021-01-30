import React from 'react';
import DashboardNav from '../DashboardNav/DashboardNav';
import Sidebar from '../Sidebar/Sidebar';
import './Review.css';

const Review = () => {
    return (
        <div className='dashboard-main'>
            <DashboardNav />
            <div className='row dashboard-container m-0'>
                <Sidebar />
                <div className='pt-lg-5 pl-lg-5 col-12 col-lg-10 p-0'>
                    <h6 className='pl-3 pb-2'>Give Review</h6>
                    <div className='dashboard p-3 pb-5'>
                        <textarea name="" id="" rows="7" placeholder="Give your Review here..." />
                        <div className="text-right mt-3">
                            <button className="btn bg text-white px-5"><small>Submit</small></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;