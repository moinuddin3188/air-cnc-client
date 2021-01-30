import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Navbar2 from '../Home/Navbar/Navbar2';
import SearchResultCard from './SearchCard/SearchResultCard';
import './SearchResult.css';
import { Popover, Whisper, Button } from 'rsuite';
import { Toggle } from 'rsuite';
import Footer from '../Footer/Footer';


const SearchResult = () => {

    const [userInfo, setUserInfo] = useContext(UserContext);

    const [price, setPrice] = useState(0);

    const handleChange = e => {
        setPrice(e.target.value);
    }

    const [allResult, setAllResult] = useState([])
    const [result, setResult] = useState([]);
    const { key } = useParams();

    useEffect(() => {
        fetch(`https://secret-ridge-54673.herokuapp.com/search/${key}`)
            .then(res => res.json())
            .then(data => {
                setResult(data);
                setAllResult(data);
            })
    }, [key])

    const [cancellationFilter, setCancellationFilter] = useState(false);
    const [priceFilter, setPriceFilter] = useState(false);

    const handleCancellationFilter = () => {
        setCancellationFilter(!cancellationFilter);
        if (!cancellationFilter) {
            const filtered = result.filter(home => home.cancellationFlexibility === true);
            setResult(filtered);
        }else {
            setResult(allResult)
        }
    }

    const handlePriceFilter = () => {
        setPriceFilter(!priceFilter);
        if (!priceFilter) {
            const filtered = result.filter(home => parseInt(home.price) < parseInt(price));
            setResult(filtered);
        }else {
            setResult(allResult)
        }
    }

    const cancellation = (
        <Popover style={{ width: 200 }}>
            <div className="text-right mb-2">
                <Toggle
                    onChange={handleCancellationFilter}
                    checked={cancellationFilter ? true : false}
                />
            </div>
            <p>Show which have cancellation flexibility</p>
        </Popover>
    );

    const priceRange = (
        <Popover style={{ width: 200 }}>
            <h6>${price}</h6>
            <input onChange={handleChange} className="w-100" type="range" min="0" max="500" />
            <div className='text-right'>
                <Button
                    onClick={handlePriceFilter}
                    appearance="primary"
                    size="sm"
                >
                    {priceFilter ? 'Unset' : 'ok'}
                </Button>
            </div>
        </Popover>
    )

    const instantBook = (
        <Popover style={{ width: 200 }}>
            <div className="text-right mb-2">
                <Toggle />
            </div>
            <p>You don't need the approval of host</p>
        </Popover>
    );

    return (
        <>
            <section className='navbar-container'>
                <Navbar2 />
            </section>
            <section className="container search-results">
                <div className="row">
                    <div className="col-lg-6 col-12 order-lg-1 order-2 pt-3">
                        <p style={{ fontSize: '12px', margin: '0' }}>252 stays Apr 13-17 3 guests</p>
                        <h5>Stay in {userInfo.location && userInfo.location.charAt(0).toUpperCase() + userInfo.location.slice(1) || "Your Location"}</h5>
                        <div className="filter mt-3">
                            <Whisper
                                speaker={cancellation}
                                placement="bottom"
                                trigger="click"
                            >
                                <button>Cancellation Flexibility</button>
                            </Whisper>
                            <Whisper
                                speaker={cancellation}
                                placement="bottom"
                                trigger="click"
                            >
                                <button>Type of Place</button>
                            </Whisper>
                            <Whisper
                                speaker={priceRange}
                                placement="bottom"
                                trigger="click"
                            >
                                <button>Price</button>
                            </Whisper>
                            <Whisper
                                speaker={instantBook}
                                placement="bottom"
                                trigger="click"
                            >
                                <button>Instant Book</button>
                            </Whisper>
                            <Whisper
                                speaker={cancellation}
                                placement="bottom"
                                trigger="click"
                            >
                                <button>More Filters</button>
                            </Whisper>
                        </div>
                        <div className='mt-5'>
                            {
                                result.map(home =>
                                    <SearchResultCard
                                        home={home}
                                        key={home.id}
                                    />
                                )
                            }
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 order-1 order-lg-2">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7496149.953730211!2d85.8462125075647!3d23.452185887261443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1607272267540!5m2!1sen!2sbd"
                            width="100%"
                            height="600"
                            aria-hidden="false"
                            tabIndex="1"
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default SearchResult;