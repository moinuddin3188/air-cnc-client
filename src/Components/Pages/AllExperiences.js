import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import ExperienceCard from '../Home/Experiences/ExperienceCard/ExperienceCard';
import Navbar2 from '../Home/Navbar/Navbar2';
import ExperiencesLoader from '../Preloader/ExperiencesLoader';

const AllExperiences = () => {

    const [allExperiences, setAllExperiences] = useState([]);

    useEffect(() => {
        fetch('https://secret-ridge-54673.herokuapp.com/experiences')
            .then(res => res.json())
            .then(data => setAllExperiences(data))
    }, [allExperiences]);

    return (
        <>
            <div className="border-bottom">
                <Navbar2 />
            </div>
            <div className="container mt-5">
                <h6 className="mb-2">All Home</h6>
                {allExperiences.length === 0 ?
                    <ExperiencesLoader />
                    :
                    <div className="row">
                        {
                            allExperiences.map(experience =>
                                <ExperienceCard
                                    experience={experience}
                                    key={experience.id}
                                />
                            )
                        }
                    </div>
                }
            </div>
            <Footer />
        </>
    );
};

export default AllExperiences;