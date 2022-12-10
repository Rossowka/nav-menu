import React from 'react';

import './style.scss'

function Header() {
    return (
        <header>
            <a href='/'>
                <span className="material-symbols-outlined logo">sentiment_satisfied</span>
                <span>The Cool Company</span>
            </a>
            <button className=''>
                <span className="material-symbols-outlined">menu</span>
            </button>
        </header>
    )
}

export default Header;