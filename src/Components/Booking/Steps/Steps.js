import React, { useState } from 'react';
import './Steps.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Steps = (props) => {
    return (
        <div className='steps mt-4'>
            <ul className="list-inline mr-4">
                <li className={props.step > 0 ? "list-inline-item mr-4 text-dark" : "list-inline-item mr-4 text-black-50"}>
                    1. Review House Rules
                    <FontAwesomeIcon className='ml-4' icon={faAngleRight} />
                </li>
                <li className={props.step > 1 ? "list-inline-item mr-4 text-dark" : "list-inline-item mr-4 text-black-50"}>
                    2. Who is coming?
                    <FontAwesomeIcon className='ml-4' icon={faAngleRight} />
                </li>
                <li className={props.step > 2 ? "list-inline-item mr-4 text-dark" : "list-inline-item mr-4 text-black-50"}>
                    3. Confirm and Pay
                </li>
            </ul>
        </div>
    );
};

export default Steps;