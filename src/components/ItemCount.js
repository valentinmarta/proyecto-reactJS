import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const ItemCount = () => {

    const [Contador, setContador] = useState(0)

    return (
        <>
            <p>{Contador}</p>
            <Button onClick={() => setContador(Contador + 1)} variant="info">+</Button>{' '}
            <Button onClick={() => setContador(Contador - 1)} variant="info">-</Button>{' '}
        </>
    )
}

export default ItemCount
