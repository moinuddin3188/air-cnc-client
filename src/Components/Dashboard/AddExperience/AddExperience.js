import React from 'react';
import DashboardNav from '../DashboardNav/DashboardNav';
import Sidebar from '../Sidebar/Sidebar';

const AddExperience = () => {
    return (
        <div className='dashboard-main'>
            <DashboardNav />
            <div className='row dashboard-container m-0'>
                <Sidebar />
                <div className='pt-lg-5 pl-lg-5 col-12 col-lg-10 p-0'>
                    <h6 className='pl-3 pb-2'>Add Experience</h6>
                    <div className='dashboard p-3 pb-5'>
                        <form action="">
                            <div class="row mb-2">
                                <div class="col col-sm-6 mb-2 mb-sm-0">
                                    <input type="text" class="form-control" placeholder="Title" />
                                </div>
                                <div class="col col-sm-6 mb-2 mb-sm-0">
                                    <input type="text" class="form-control" placeholder="Location" />
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col col-sm-6 mb-2 mb-sm-0">
                                    <input type="text" class="form-control" placeholder="Home type" />
                                </div>
                                <div class="col col-sm-6 mb-2 mb-sm-0">
                                    <input type="text" class="form-control" placeholder="Host" />
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col col-sm-6 mb-2 mb-sm-0">
                                    <input type="text" class="form-control" placeholder="Guest" />
                                </div>
                                <div class="col col-sm-6 mb-2 mb-sm-0">
                                    <input type="text" class="form-control" placeholder="Bedroom" />
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col col-sm-6 mb-2 mb-sm-0">
                                    <input type="text" class="form-control" placeholder="Bed" />
                                </div>
                                <div class="col col-sm-6 mb-2 mb-sm-0">
                                    <input type="text" class="form-control" placeholder="Bath" />
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col">
                                    <div class="form-group">
                                        <label for="exampleFormControlFile1">Host image</label>
                                        <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-group">
                                        <label for="exampleFormControlFile1">Home image</label>
                                        <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <button className="btn text-white bg px-5"><small>Submit</small></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddExperience;