import React, { useContext } from 'react';
import './SearchResultCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';

const SearchResultCard = (props) => {

    const [userInfo, setUserInfo] = useContext(UserContext);
    const { id, title, img, price, rating, reviews, bed, bedroom, bath, guest} = props.home;

    const history = useHistory();

    const homeDetails = () => {
        history.push(`/details/${id}`)
    }

    return (
        <div onClick={homeDetails} className='search-result-card row'>
            <div className='col-4 px-0'>
                <img className='img-fluid' src={img} alt="" />
            </div>
            <div className='col-8 pt-2 pr-5'>
                <p className='title'>{title}</p>
                <p>
                    <span className='mr-2'>{guest} Guests</span>
                    <span className='mr-2'>{bedroom} Bedroom</span>
                    <span className='mr-2'>{bed} Bed</span>
                    <span>{bath} Bath</span>
                </p>
                <p>
                    <span>Wifi </span>
                    <span>Air Condition </span>
                    <span>Kitchen</span>
                </p>
                <p className='mt-2'>
                    <span>Cancellation flexibility available</span>
                </p>
                <div className="row">
                    <div className="col rating">
                        <span className='font-weight-bold text-dark'>
                            <FontAwesomeIcon
                                style={{fontSize: '12', margin: '0 5px 1px 0'}}
                                icon={faStar}
                                color='#86f244'
                            />
                            {rating}({reviews})
                        </span>
                    </div>
                    <div className="col d-flex justify-content-end">
                        <div>
                            <p className="price">
                                <span className='font-weight-bold text-dark'>${price * userInfo.guest || price}/</span> night
                            </p>
                            <span style={{ fontSize: '10px' }}>${price} total</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchResultCard;