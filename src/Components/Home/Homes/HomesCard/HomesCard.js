import React from 'react';
import './HomesCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';


const HomesCard = (props) => {

    const { id, img, title, location, event, price, reviews } = props.home;

    const repeat = [1, 1, 1, 1, 1];
    const history = useHistory();

    const homeDetails = () => {
        history.push(`/details/${id}`)
    }

    return (
        <div onClick={homeDetails} className='experience-card'>
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
    );
};

export default HomesCard;