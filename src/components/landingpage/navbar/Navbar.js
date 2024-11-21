import React from "react";
import Logo from "../../../assets/icon/logo.png";

import "./navbar.css";

const Navbar = () => {
    return (
        <navbar className="navbar">
            <a href="#home" className="d-flex">
                <img src={Logo} alt="Logo" className="icon"/>
                <p>ZEITPLAN</p>
            </a>
            <div className="navbar_navigation">
                <ul className="d-flex">
                    <li>
                        <a href="#home">Home</a>
                    </li>

                    <li>
                        <a href="#fitur">Fitur</a>
                    </li>

                    <li>
                        <a href="#home">Harga-Harga</a>
                    </li>

                    <li>
                        <a href="#home">Testimoni</a>
                    </li>
                    <li>
                        <a href="#download" alt="Download" className="btn btn-primary">Download</a>
                    </li>
                </ul>
            </div>
        </navbar>
    )
}

export default Navbar;