import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const Guest = () => {

    const [userInfo, setUserInfo] = useContext(UserContext);

    const [adults, setAdults] = useState(0);
    const [childe, setChilde] = useState(0);
    const [babes, setBabes] = useState(0);

    adults < 0 && setAdults(0);
    childe < 0 && setChilde(0);
    babes < 0 && setBabes(0);

    const [apply, setApply] = useState(false);

    const guest = adults + childe + babes;

    const handleApply = () => {
        setApply(true);
        setUserInfo({
            ...userInfo,
            guest: guest,
            apply: true,
            adults: adults,
            childe: childe,
            babes: babes
        });
    }


    return (
        <div>
            <div className='row'>
                <div className='col-6'>
                    <p>ADULTS</p>
                </div>
                <div className='col-6 text-right'>
                    <p>
                        <FontAwesomeIcon
                            onClick={() => setAdults(adults - 1)}
                            className='icon'
                            icon={faMinus}
                        />
                        <span className='px-4'>{adults}</span>
                        <FontAwesomeIcon
                            onClick={() => setAdults(adults + 1)}
                            className='icon'
                            icon={faPlus}
                        />
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <p>CHILDE</p>
                    <span className='condition'>Age 2-12</span>
                </div>
                <div className="col-6 text-right">
                    <p>
                        <FontAwesomeIcon
                            onClick={() => setChilde(childe - 1)}
                            className='icon'
                            icon={faMinus}
                        />
                        <span className='px-4'>{childe}</span>
                        <FontAwesomeIcon
                            onClick={() => setChilde(childe + 1)}
                            className='icon'
                            icon={faPlus}
                        />
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <p>BABES</p>
                    <span className='condition'>Younger then 2</span>
                </div>
                <div className="col-6 text-right">
                    <p>
                        <FontAwesomeIcon
                            onClick={() => setBabes(babes - 1)}
                            className='icon'
                            icon={faMinus}
                        />
                        <span className='px-4'>{babes}</span>
                        <FontAwesomeIcon
                            onClick={() => setBabes(babes + 1)}
                            className='icon'
                            icon={faPlus}
                        />
                    </p>
                </div>
            </div>
            <div className="text-right">
                <button
                    type="button"
                    onClick={handleApply}
                    className="apply-btn"
                >
                    APPLY
                </button>
            </div>
        </div>
    );
};

export default Guest;