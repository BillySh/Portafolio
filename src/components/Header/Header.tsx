import React from "react";
import {ROUTES} from '../../routes/constants';
import {Link} from 'react-router-dom';
import'./Header.css';

const Header =() =>{
    return(
        <nav className="navBar">
            <div className="wrapper">
                <ul className="buttons">
                    <p className="title">
                    
                        Portafolio
                    </p>
                    <li className="button">
                        <Link to={ROUTES.HOME}>About Me</Link>
                    </li>
                    <li className="button">
                        <Link to={ROUTES.HOME}>Projects</Link>
                    </li>
                    <li className="button">
                        <Link to={ROUTES.HOME}>Contact Info</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Header