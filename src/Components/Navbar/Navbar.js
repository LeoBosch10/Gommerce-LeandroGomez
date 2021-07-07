import React from 'react'
import CartWidget from './CartWidget';
import './Navbar.css';


const Navbar = (props) => {
    return (
        <div className = 'navbar'>
            <h1 style={{ color: `${props.color}` }}> GOmmerce </h1>  
            <CartWidget/>
     
        </div>
       
    );
}

export default Navbar;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               