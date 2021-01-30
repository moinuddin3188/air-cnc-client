import React from 'react';
import './Dashboard.css';
import DashboardNav from './DashboardNav/DashboardNav';
import Sidebar from './Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div className='dashboard-main'>
            <DashboardNav />
            <div className='row dashboard-container m-0'>
                <Sidebar />
                <div className='pt-lg-5 pl-lg-5 col-12 col-lg-10 p-0'>
                    <h6 className='pl-3 pb-2'>Booking List</h6>
                    <div className='dashboard p-3 pb-5'>
                        <div className='table-container'>
                            <table>
                                <tr>
                                    <th>Sir. No</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Booking</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Moin uddin</td>
                                    <td>moinuddin3188@gmail.com</td>
                                    <td>Something</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;