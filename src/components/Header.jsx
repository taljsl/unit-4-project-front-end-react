import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/')
    }
    return (
        <header className='header' onClick={goToHome}>
            <h1 className="header-title">THE HOMESTEADER</h1>
            <hr className='header-divider' />
        </header>
    );
};

export default Header;

// unit-4-project-front-end-react/src/header.css