import React from 'react';
import './Nav.css'
import nav_img from "../../../public/nav_img.svg";

const Nav = () => {
    return (
        <div>
            <div className='navbar'>
                <h2 className='heading'>Knowledge Cafe</h2>
                <img src={nav_img} alt="" />
            </div>
            <hr />
        </div>
    );
};

export default Nav;