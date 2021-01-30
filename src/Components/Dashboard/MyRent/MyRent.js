import React from 'react';
import DashboardNav from '../DashboardNav/DashboardNav';
import Sidebar from '../Sidebar/Sidebar';
import './MyRent.css';

const MyRent = () => {
    return (
        <div className='dashboard-main'>
            <DashboardNav />
            <div className="row dashboard-container m-0">
                <Sidebar />
                <div className='pt-lg-5 pl-lg-5 col-12 col-lg-10 p-0'>
                    <h6 className='pl-3 pb-2'>My Rent</h6>
                    <div className='dashboard p-3 pb-5'>
                        <div className='table-container'>
                            <table>
                                <tr>
                                    <th>Sir. No</th>
                                    <th>Email</th>
                                    <th>Booking</th>
                                    <th>Action</th>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyRent;