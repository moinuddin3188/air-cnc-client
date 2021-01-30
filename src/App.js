import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'jquery/dist/jquery.min.js';
import Details from './Components/Details/Details';
import SearchResult from './Components/SearchResult/SearchResult';
import ReviewHouse from './Components/Booking/ReviewHouse/ReviewHouse';
import MeetHost from './Components/Booking/MeetHost/MeetHost';
import Payment from './Components/Booking/Payment/Payment';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createContext, useState } from 'react';
import Login from './Components/Login/Login';
import AllExperiences from './Components/Pages/AllExperiences';
import AllHomes from './Components/Pages/AllHomes';
import PrivetRoute from './Components/PriverRoute/PrivetRoute';
import NotFound from './Components/NotFound/NotFound';
import jwt_decode from "jwt-decode";
import Dashboard from './Components/Dashboard/Dashboard';
import MyRent from './Components/Dashboard/MyRent/MyRent';
import Review from './Components/Dashboard/Review/Review';
import AddAdmin from './Components/Dashboard/AddAdmin/AddAdmin';
import AddHome from './Components/Dashboard/AddHome/AddHome';
import AddExperience from './Components/Dashboard/AddExperience/AddExperience';


export const UserContext = createContext();


function App() {

  const token = sessionStorage.getItem('token');
  const decoded = token && jwt_decode(token);

  const [userInfo, setUserInfo] = useState({
    apply: false, 
    night: 1,
    email: decoded && decoded.email || '',
    name: decoded && decoded.name || '',
    photo: decoded && decoded.picture || ''
  });

  return (
    <UserContext.Provider value={[userInfo, setUserInfo]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search-result/:key">
            <SearchResult />
          </Route>
          <Route path="/details/:id">
            <Details />
          </Route>
          <PrivetRoute path="/booking/:id2">
            <ReviewHouse />
          </PrivetRoute>
          <PrivetRoute path="/host/:id3">
            <MeetHost />
          </PrivetRoute>
          <PrivetRoute path="/payment/:id4">
            <Payment />
          </PrivetRoute>
          <Route path="/allExperiences">
            <AllExperiences />
          </Route>
          <Route path="/allHome">
            <AllHomes />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/myRent">
            <MyRent />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/addHome">
            <AddHome />
          </Route>
          <Route path="/addExperience">
            <AddExperience />
          </Route>
          <Route path="/addAdmin">
            <AddAdmin />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
