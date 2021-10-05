import React from 'react'
import ItemList from "./ItemList";

const items = [
    { id: 0, title: "Remera black", description: "Remera Negra", price: 4990, pictureUrl: "https://cdn.shopify.com/s/files/1/1994/1911/products/remerarocketblack_5_666x998.jpg?v=1614279776" },
    { id: 1, title: "Remera grey", description: "Remera Gris", price: 4000, pictureUrl: "https://cdn.shopify.com/s/files/1/1994/1911/products/remerarocketgreymelange_2_600x.jpg?v=1614279956" },
    { id: 2, title: "Remera blue", description: "Remera Azul", price: 4000, pictureUrl: "https://cdn.shopify.com/s/files/1/1994/1911/products/remerarocketdeepblue_7_600x.jpg?v=1614279903" },
    { id: 3, title: "Remera red", description: "Remera Bordo", price: 4500, pictureUrl: "https://cdn.shopify.com/s/files/1/1994/1911/products/remerarocketbordeaux_9_600x.jpg?v=1614279830" },
    { id: 4, title: "Remera white", description: "Remera Blanca", price: 3900, pictureUrl: "https://cdn.shopify.com/s/files/1/1994/1911/products/remerarocketwhite_4_600x.jpg?v=1614280059" }
  ]

const ItemListContainer = () => {
    return (
        <>
            <ItemList items={items} />
        </>
    )
}

export default ItemListContainer
