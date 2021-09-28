import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import ItemCount from './ItemCount';

const CartWidget = (props) => {
    const {Numero} = props   
    return (
        Numero < 1 ?
        <>
            <h1><FaShoppingCart/></h1>
            <ItemCount/>
            <h2>Tu carro esta vacio</h2>
        </>
        :
        <>
            <h1><FaShoppingCart/></h1>
            <ItemCount/>
            <h2>Tu carro tiene objetos</h2>
        </>
    )
}

export default CartWidget
