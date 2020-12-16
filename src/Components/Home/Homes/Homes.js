import React, { useEffect, useState } from 'react';
import './Homes.css';
import HomesCard from './HomesCard/HomesCard';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import CardPreloader from '../../Preloader/CardPreloader';
import { useHistory } from 'react-router-dom';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Homes = () => {

    const [homes, setHomes] = useState([]);

    useEffect(() => {
        fetch('https://secret-ridge-54673.herokuapp.com/homes')
            .then(res => res.json())
            .then(data => setHomes(data))
    }, [homes]);

    const history = useHistory();
    const allHomes = () => {
        history.push("/allHome")
    }

    const device = window.innerWidth;

    return (
        <>
            <div className="row mr-0">
                <div className="col-6">
                    <h5 className='mt-5'>Homes</h5>
                </div>
                <div className="col-6 text-right pr-0">
                    <p
                        onClick={allHomes}
                        className='mt-5 text-primary small'
                        style={{ cursor: 'pointer' }}>
                        See all
                        <FontAwesomeIcon className='ml-2' icon={faAngleRight} />
                    </p>
                </div>
            </div>
            <div className='mt-2'>
                {homes.length === 0 ?
                    <CardPreloader />
                    :
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={ device < 300 && 1 || device < 400 && 1 || device < 700 && 2 || 3}
                        navigation
                        pagination={{ clickable: true }}
                    >
                        {
                            homes.map(home =>
                                <SwiperSlide key={home.id}>
                                    <HomesCard
                                        home={home}
                                    />
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                }
            </div>
        </>
    );
};

export default Homes;