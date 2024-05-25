import React from "react";
import Logo from "../../../assets/icon/logo.png";

import "./navbar.css";

const Navbar = () => {
    return (
        <navbar class="navbar">
            <a href="#home" class="d-flex">
                <img src={Logo} alt="Logo" class="icon"/>
                <p>ZEITPLAN</p>
            </a>
            <div class="navbar_navigation">
                <ul class="d-flex">
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
                        <a href="#download" alt="Download" class="btn btn-primary">Download</a>
                    </li>
                </ul>
            </div>
        </navbar>
    )
}

export default Navbar;