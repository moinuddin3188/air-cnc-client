import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivetRoute = ({ children, ...rest }) => {

    const [userInfo, setUserInfo] = useContext(UserContext)

    return (
        <Route
            {...rest}
            render={({ location }) =>
                userInfo.email || sessionStorage.getItem('token') ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivetRoute;