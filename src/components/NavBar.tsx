import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/" className="navbar-brand ml-3" > Throw Up The X</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link"><span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Historical Standings</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="Managers" className="nav-link">Managers</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="Matchups" className="nav-link">Matchups</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="Standings" className="nav-link">Standings</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="Drafts" className="nav-link">Drafts</Link>
                    </li>
                </ul>

                <ul className="navbar-nav mr-3">
                    <li className="nav-item">
                        <Link to="About" className="nav-link">About</Link>
                    </li>
                </ul>
            </div>        
        </nav>
    )
}