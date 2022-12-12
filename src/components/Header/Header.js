import React from 'react';

import './style.scss'

function Header({ handleToggle, isActive}) {
    return (
        <header>
            <a href='/'>
                <span className="material-symbols-outlined logo">sentiment_satisfied</span>
                <span>The Cool Company</span>
            </a>
            <button onClick={handleToggle}>
                <span className="material-symbols-outlined">{isActive ? 'close' : 'menu'}</span>
            </button>
        </header>
    )
}

export default Header;