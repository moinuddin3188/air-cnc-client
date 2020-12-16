import React, { useEffect, useState } from 'react';
import './Experience.css';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import ExperiencesLoader from '../../Preloader/ExperiencesLoader';
import { useHistory } from 'react-router-dom';


const Experience = () => {

    const [experiences, setExperiences] = useState([]);
    const experience = experiences.slice(0, 4);

    useEffect(() => {
        fetch('https://secret-ridge-54673.herokuapp.com/experiences')
            .then(res => res.json())
            .then(data => setExperiences(data))
    }, [experiences]);

    const history = useHistory();
    const allExperience = () => {
        history.push("/allExperiences")
    }

    return (
        <>
            <div className="row mb-2">
                <div className="col-6">
                    <h5>Experiences</h5>
                </div>
                <div className="col-6 text-right">
                    <p
                        onClick={allExperience}
                        className='text-primary small'
                        style={{ cursor: 'pointer' }}>
                            See all
                        <FontAwesomeIcon className='ml-2' icon={faAngleRight} />
                    </p>
                </div>
            </div>
            {experiences.length === 0 ?
                <ExperiencesLoader />
                :
                <div className="row mr-0">
                    {
                        experience.map(experience =>
                            <ExperienceCard
                                key={experience.id}
                                experience={experience}
                            />
                        )
                    }
                </div>
            }
        </>
    );
};

export default Experience;