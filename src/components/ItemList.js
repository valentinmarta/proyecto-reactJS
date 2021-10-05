import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Item from './Item';

const ItemList = ({items}) => {

    return(

    <div className="row">
        {
            items.map((item) => (
                <Item item={item} />
            ))
        }
    </div>
    )
}

export default ItemList; 