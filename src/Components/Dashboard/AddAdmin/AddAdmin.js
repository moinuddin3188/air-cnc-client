import React from 'react';
import DashboardNav from '../DashboardNav/DashboardNav';
import Sidebar from '../Sidebar/Sidebar';

const AddAdmin = () => {
    return (
        <div className='dashboard-main'>
            <DashboardNav />
            <div className='row dashboard-container m-0'>
                <Sidebar />
                <div className='pt-lg-5 pl-lg-5 col-12 col-lg-10 p-0'>
                    <h6 className='pl-3 pb-2'>Add Admin</h6>
                    <div className='dashboard p-3 pb-5'>
                        <form action="">
                            <input className='form-control' type="email" name="" id="" placeholder='Email' required/>
                            <div className='text-right'>
                                <button className="btn bg text-white px-5 mt-3"><small>Submit</small></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAdmin;