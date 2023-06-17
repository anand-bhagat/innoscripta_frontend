import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePageComponent from '../pages/HomePage/HomePageComponent';
import LoginPageComponent from '../pages/LoginPage/LoginPageComponent';
import RegistrationPageComponent from '../pages/RegistrationPage/RegistrationPageComponent';
import Header from '../components/Header/Header';
import FeedPage from '../pages/FeedPage/FeedPageComponent';

const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<HomePageComponent />} />
                <Route exact path="/login" element={<LoginPageComponent />} />
                <Route exact path="/register" element={<RegistrationPageComponent />} />
                <Route path="/feed" element={<FeedPage />} />
            </Routes>
        </Router>
    );
  };
  

export default AppRouter;
  