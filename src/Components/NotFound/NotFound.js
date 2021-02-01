import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFound = () => {

    const history = useHistory()
    const goHome = () => {
        history.push('/')
    }

    return (
        <div className="text-center">
            <img src="https://i.imgur.com/iY03dIr.png" alt="" />
            <div className="text-center">
                <button onClick={goHome} className="btn btn-primary mt-4">
                    Home
                </button>
            </div>
        </div>
    );
};

export default NotFound;