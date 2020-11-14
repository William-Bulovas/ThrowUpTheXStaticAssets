import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Link to="/" className="navbar-brand ml-3" > Throw Up The X</Link>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink to="/Historical" activeClassName="active" className="nav-link">Historical Standings</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/Managers" activeClassName="active" className="nav-link">Managers</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/Matchups" activeClassName="active" className="nav-link">Matchups</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/Standings" activeClassName="active" className="nav-link">Standings</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/Drafts" activeClassName="active" className="nav-link">Drafts</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/Records" activeClassName="active" className="nav-link">Records</NavLink>
                    </li>
                </ul>

                <ul className="navbar-nav mr-3">
                    <li className="nav-item">
                        <Link to="About" className="nav-link">About</Link>
                    </li>
                </ul>
            </Navbar.Collapse>
        </Navbar>
    )
}