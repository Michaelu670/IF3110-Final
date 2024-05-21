import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo-text-color.png';

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <img
                src={Logo}
                alt="App Logo"
                className="max-w-lg"
            />

            <p className="text-lg text-black mb-1">
                The page you are looking for doesn't exist.
            </p>

            <Link to="/login" className="text-blue-500 hover:text-darkgreen">
                Go back to login
            </Link>
        </div>
    );
};

export default NotFoundPage;
