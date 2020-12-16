import React from 'react';
import './ExperienceCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';


const ExperienceCard = (props) => {

    const { title, img, location, event, price, reviews } = props.experience;

    const repeat = [1, 1, 1, 1, 1];
    const history = useHistory();

    const experienceDetails = () => {
        history.push('/details');
    }

    return (
        <div className="col-md-3 col-6 pr-0 mb-md-0 mb-4 experience-res">
            <div className='experience-card'>
                <img width="100%" src={img} alt="" />
                <p className='sub-title text-uppercase'>{event} - {location}</p>
                <p className='title'>{title}</p>
                <p className='price'>${price} per person</p>
                {
                    repeat.map((item, index) =>
                        <FontAwesomeIcon
                            key={index}
                            style={{ fontSize: '9px' }}
                            color='#2bde8c'
                            icon={faStar}
                        />
                    )
                }
                <span style={{ fontSize: '11px', marginLeft: '3px' }}>{reviews}</span>
            </div>
        </div>
    );
};

export default ExperienceCard;