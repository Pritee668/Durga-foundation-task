
import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">Company Logo</div>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Employees</a></li>
                <li><a href="#">Settings</a></li>
                <li><a href="#">Logout</a></li>
            </ul>
            <div className="user-info">
                <span>Fakhar Naveed</span>
            </div>
        </nav>
    );
}

export default Navbar;
