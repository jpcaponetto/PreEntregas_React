import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ( {item} ) => {

  const {agregarAlCarrito} = useContext(CartContext);

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
  cantidad > 1 && setCantidad(cantidad -1)
  }

  const handleSumar = () => {
  cantidad < 10 && setCantidad(cantidad +1 )
  }


  return (
    <div className='container'>
      <div className="producto-detalle">
        <img src={item.imagen} alt={item.titulo} />
        <div>
            <h3 className="titutlo">{item.titulo}</h3>
            <p className="descripcion">{item.descripcion}</p>
            <p className="categoria">{item.categoria}</p>
            <p className="categoria">Stock: {item.stock}</p>
            <p className="precio">$ {item.precio}</p>
              <ItemCount cantidad={cantidad} handleSumar={handleSumar} handleRestar={handleRestar} 
              handleAgregar={() => { agregarAlCarrito(item, cantidad)}}  />
            <Link to="/carrito" className='agregar-al-carrito'> Ir al carrito </Link>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail