import React from 'react';
import {Link} from 'react-router-dom';

export const Navbar = () => {
    return (
        <div>
            <Link to="/alerts">Alerts</Link>
            <Link to="/agents">Agents</Link>
            <Link to="/rules">Rules</Link>
        </div>
    )
}