import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"

const Item = ({item}) => {
    const {id, title, description, price, pictureUrl} = item;

    return (
        <div className="col col-md-4">
            <div id={id} className="card border-dark text-center m-2" style={{ width: "18rem" }}>
                <img src={pictureUrl} className="card-img-top p-1" style={{ height: "30rem" }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>${price}</strong></li>
                    <li className="list-group-item">
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Item; 
