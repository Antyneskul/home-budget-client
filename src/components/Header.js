import React from "react";
import { NavLink } from 'react-router-dom';

const Header = () => (
    <nav>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
        </ul>
    </nav>
);

export default Header;
