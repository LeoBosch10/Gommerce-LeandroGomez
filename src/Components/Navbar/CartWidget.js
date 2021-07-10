import React from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {Button} from '@material-ui/core';
import './Navbar.css'

 const CartWidget = (props) =>{
   return (
    <div className="cart-widget">
        <Button
        variant= "contained"
        color= "secondary"
        >
        <AddShoppingCartIcon
        color= 'white'
        />
        </Button>
    </div>
  );
}
export default CartWidget