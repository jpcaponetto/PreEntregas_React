// import Card from 'react-bootstrap/Card'; 

import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ( {item} ) => {
  
  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
  cantidad > 1 && setCantidad(cantidad -1)
  }

  const handleSumar = () => {
  cantidad < 10 && setCantidad(cantidad +1 )
  }
  const handleAgregar = () => {
    console.log({...item, cantidad} );
}

  return (
    <div className='container'>
      <div className="producto-detalle">
        <img src={item.imagen} alt={item.titulo} />
        <div>
            <h3 className="titutlo">{item.titulo}</h3>
            <p className="descripcion">{item.descripcion}</p>
            <p className="categoria">{item.categoria}</p>
            <p className="precio">$ {item.precio}</p>
              <ItemCount cantidad={cantidad} handleSumar={handleSumar} handleRestar={handleRestar} handleAgregar={handleAgregar} />
        </div>

      </div>

    {/* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.imagen} />
      <Card.Body>
        <Card.Title> {item.titulo} - ${item.precio}</Card.Title>
        <Card.Text>
          {item.descripcion} 
        </Card.Text>
      </Card.Body>
    </Card> */}
    </div>
  )
}

export default ItemDetail