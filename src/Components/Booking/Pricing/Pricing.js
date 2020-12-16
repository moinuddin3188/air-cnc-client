import React, { useContext, useState } from 'react';
import './Pricing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faStar, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Facebook } from 'react-content-loader'
import { UserContext } from '../../../App';
import Guest from '../../Home/Search/Guest';


const Pricing = ({ title, reviews, rating, price, img }) => {

    const [userInfo, setUserInfo] = useContext(UserContext);

    const [showBox, setShowBox] = useState(false);

    return (
        <div className='price-box'>
            {img ?
                <div className="row">
                    <div className="col-7 pr-0">
                        <h6>{title}</h6>
                        <p className='review mt-3'>
                            <FontAwesomeIcon color='#86f244' icon={faStar} />
                            <span className='font-weight-bold text-dark ml-1'>{rating}</span>
                            <span> ({reviews} reviews)</span>
                        </p>
                    </div>
                    <div className="col-5">
                        <img width="100%" src={img} alt="" />
                    </div>
                </div>
                :
                <Facebook />
            }
            <span>Dates</span>
            <div className="date mb-2 d-flex align-items-center justify-content-between">
                <input type="date" defaultValue={userInfo.checkIn} />
                <FontAwesomeIcon icon={faAngleRight} />
                <input type="date" className='text-right' defaultValue={userInfo.checkOut} />
            </div>
            <span>Guests</span>
            <div className="guests py-2">
                <div className="row">
                    <div className='col-6'>
                        <p>{userInfo.guest} Guests</p>
                    </div>
                    <div className="text-right col-6">
                        <FontAwesomeIcon
                            style={{ transform: showBox && 'rotate(180deg)', cursor: 'pointer' }}
                            onClick={() => setShowBox(!showBox)}
                            icon={faAngleDown}
                        />
                    </div>
                </div>
                <div className={showBox ? 'show-box mt-2' : 'hide mt-2'}>
                    <Guest />
                </div>
            </div>
            <table>
                <tr>
                    <td>${price} x 4 night</td>
                    <td>$136</td>
                </tr>
                <tr>
                    <td>Cleaning fee</td>
                    <td>$10</td>
                </tr>
                <tr>
                    <td>Service fee</td>
                    <td>$20</td>
                </tr>
                <tr className='border-0'>
                    <th>Total</th>
                    <th>$214</th>
                </tr>
            </table>
        </div>
    );
};

export default Pricing;