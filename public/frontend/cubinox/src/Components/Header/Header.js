import React, { Component } from 'react';
import {Link} from "@reach/router";
import Button from '@material-ui/core/Button';

import './Header.css'
import logo from '../../assets/logo.png';

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header>
                <div className="logo-sec">
                    <Link to="/">
                    <img src={require("../../assets/logo.png")} className="logo-img" alt="company logo"/>
                    </Link>
                </div>
                <div className="navbar">
                    <ul className="menu-list">
                        <li>
                        <Link className="lst-elmnt" to="/">About us</Link>
                        </li>
                        <li>
                        <Link className="lst-elmnt" to="/">Blog</Link>
                        </li>
                    </ul>
                    
                    <Link className="lst-elmnt" to="/login/"><Button variant="outlined" color="primary">
                    Login</Button></Link>
                </div>
            </header>
        )
    }
}

export default Header;