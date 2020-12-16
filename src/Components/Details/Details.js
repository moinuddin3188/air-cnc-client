import React, { useContext, useEffect, useState } from 'react';
import './Details.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAngleRight, faCheckSquare, faSprayCan, faUser, faStar, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import Navbar2 from '../Home/Navbar/Navbar2';
import { Facebook, BulletList, Code } from 'react-content-loader'
import { UserContext } from '../../App';
import Guest from '../Home/Search/Guest';


const Details = () => {

    const { id } = useParams();
    const [userInfo, setUserInfo] = useContext(UserContext)
    const [home, setHome] = useState({})

    const [showBox, setShowBox] = useState(false);

    const [moreDetails, setMoreDetails] = useState(false);

    useEffect(() => {
        fetch(`https://secret-ridge-54673.herokuapp.com/details/${id}`)
            .then(res => res.json())
            .then(data => setHome(data[0]))
    }, [])

    const { title, img, price, location, guest, bed, bedroom, bath, facilities, reviews, rating, host, hostImg } = home

    return (
        <>
            <section>
                <Navbar2 />
            </section>
            <section className='details-container mt-3'>
                {Object.keys(home).length === 0 ?
                    <Code />
                    :
                    <div className="d-flex">
                        <img width="50%" src={img} alt="" />
                        <img width="50%" src={img} alt="" />
                    </div>
                }
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-7 col-12">
                            {Object.keys(home).length === 0 ?
                                <Facebook />
                                :
                                <div className="row pb-1">
                                    <div className="col-9">
                                        <h3>{title}</h3>
                                        <p className='mt-3'>{location}</p>
                                        <p>{guest} Guests {bedroom} Bedroom {bed} Bed {bath} Baths</p>
                                    </div>
                                    <div className="col-3 text-center">
                                        <img
                                            style={{ width: '60%' }}
                                            src={hostImg} alt=""
                                        />
                                        <p>{host}</p>
                                    </div>
                                </div>
                            }
                            <div className="facilities">
                                {facilities ?
                                    facilities && facilities.map((facility, index) =>
                                        <div className='d-flex mb-3' key={index}>
                                            <p className='mr-3'>
                                                <FontAwesomeIcon
                                                    icon=
                                                    {
                                                        facility.icon == 'home' && faHome ||
                                                        facility.icon == 'check-in' && faCheckSquare ||
                                                        facility.icon == 'clean' && faSprayCan ||
                                                        facility.icon == 'user' && faUser
                                                    }
                                                />
                                            </p>
                                            <div>
                                                <p className='title'>{facility.title}</p>
                                                <p>{facility.description}</p>
                                            </div>
                                        </div>
                                    )
                                    :
                                    <BulletList />
                                }
                            </div>
                            {Object.keys(home).length === 0 ?
                                <Code />
                                :
                                <div>
                                    <p className='mt-3'>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        Quibusdam obcaecati perferendis beatae assumenda hic repellat.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
                                        corrupti labore quam officiis modi possimus. Aliquam in optio
                                        quasi unde fugiat facere commodi numquam. Ea nihil voluptas,
                                        cum repudiandae aliquam iste perferendis minima. Hic earum
                                        quibusdam veritatis.
                                    </p>
                                    <p style={{ display: !moreDetails && 'none' }} className="mt-2">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        Quibusdam obcaecati perferendis beatae assumenda hic repellat.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
                                        corrupti labore quam officiis modi possimus. Aliquam in optio
                                        quasi unde fugiat facere commodi numquam. Ea nihil voluptas,
                                        cum repudiandae aliquam iste perferendis minima. <br /><br /> Hic earum
                                        quibusdam veritatis.Lorem ipsum dolor sit amet, consectetur. Quasi
                                        corrupti labore quam officiis modi possimus. Aliquam in optio
                                        quasi unde fugiat facere commodi numquam. Ea nihil voluptas,
                                        cum repudiandae aliquam iste perferendis minima. Hic earum
                                        quibusdam veritatis.
                                    </p>
                                    <p
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => setMoreDetails(!moreDetails)}
                                        className="text-primary font-weight-bold mt-3"
                                    >
                                        {moreDetails ? "Show less" : "Read more about the spaces"}
                                        <FontAwesomeIcon
                                            style={{ transform: moreDetails && 'rotate(180deg)' }}
                                            className='ml-2'
                                            icon={faAngleDown}
                                        />
                                    </p>
                                    <p className='mt-5 font-weight-bold text-dark'>Reviews</p>
                                    <p className='review small'>
                                        <FontAwesomeIcon color='#86f244' icon={faStar} />
                                        <span className='font-weight-bold text-dark ml-1'>{rating}</span>
                                        <span> ({reviews} reviews)</span>
                                    </p>
                                </div>
                            }
                        </div>
                        <div className="col-lg-5 col-12 mt-5 mt-lg-0">
                            <div className='price-box'>
                                <p><span className="price">${price}/</span> night</p>
                                <p className='review mt-2 mb-3'>
                                    <FontAwesomeIcon color='#86f244' icon={faStar} />
                                    <span className='font-weight-bold text-dark ml-1'>{rating}</span>
                                    <span> ({reviews} reviews)</span>
                                </p>
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
                                        <td>${price} x {userInfo.night || 1} night</td>
                                        <td>${price * userInfo.night}</td>
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
                                <Link to={`/booking/${id}`}>
                                    <button className="bg reserve-btn">Reserve</button>
                                </Link>
                                <div className='text-center'>
                                    <span style={{ color: 'gray' }}>You won't be charged yet</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Details;