import React, { useEffect, useState } from 'react';
import HomesCard from '../Home/Homes/HomesCard/HomesCard';
import Navbar2 from '../Home/Navbar/Navbar2';
import ExperiencesLoader from '../Preloader/ExperiencesLoader';

const AllHomes = () => {

    const [allHomes, setAllHomes] = useState([]);

    useEffect(() => {
        fetch('https://secret-ridge-54673.herokuapp.com/homes')
            .then(res => res.json())
            .then(data => setAllHomes(data))
    }, [allHomes]);

    return (
        <>
            <div className="border-bottom">
                <Navbar2 />
            </div>
            <div className="container mt-5">
                <h6 className="mb-2">All Home</h6>
                {allHomes.length === 0 ?
                    <ExperiencesLoader />
                    :
                    <div className="row">
                        {
                            allHomes.map(home =>
                                <div className="col-md-3 col-sm-6 col-12 mb-5">
                                    <HomesCard
                                        home={home}
                                        key={home.id}
                                    />
                                </div>
                            )
                        }
                    </div>}
            </div>
        </>
    );
};

export default AllHomes;