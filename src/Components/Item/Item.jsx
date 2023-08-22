import React from 'react'
import { Link } from 'react-router-dom';



function Item({productos}) {
  const {imagen, titulo, categoria, precio, id, stock} = productos
  return (
    <div className="producto">
      <img src={imagen} alt=''/>
      <div>
        <h4>{titulo}</h4>
        <p>Precio ${precio}</p>
        <p>Categoria: {categoria}</p>
        <p>Stock: {stock}</p>
        <Link to={`/item/${id}`} className="ver-mas">Ver mas</Link>
      </div>
    </div>
  );
}

export default Item;