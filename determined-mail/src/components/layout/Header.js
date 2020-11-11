import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return  (
        <header className='header' style={headerStyle}>
            <h1>Determined Mail</h1>
        </header>
    )
}

const headerStyle = {
    background: '#000000',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    fontFamily: 'Ariel, sans-serif',
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontFamily: 'Ariel, sans-serif'
}

export default Header;