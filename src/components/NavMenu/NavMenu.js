import React from 'react';

import {
    NavLink
} from 'react-router-dom';
import './style.scss';

function NavMenu({ isActive }) {
    return (
        <>
            <nav className={isActive ? 'nav--active' : ''}>
                <div className='nav__wrapper'>
                    <ul>
                        <li>
                            <NavLink
                                to='/'
                                className={({ isActive }) =>
                                    isActive ? 'active' : ''
                                }
                                >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/about'
                                className={({ isActive }) =>
                                    isActive ? 'active' : ''
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/contact'
                                className={({ isActive }) =>
                                    isActive ? 'active' : ''
                                }
                                >
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/projects'
                                className={({ isActive }) =>
                                    isActive ? 'active' : ''
                                }
                                >
                                Projects
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='nav__overlay'>

            </div>
        </>
    )
}

export default NavMenu;