import React from 'react'
import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';



function Item({productos}) {
  const {imagen, titulo, categoria, precio, id} = productos
  return (
    <div className="producto">
      <img src={imagen} alt=''/>
      <div>
        <h4>{titulo}</h4>
        <p>Precio ${precio}</p>
        <p>Categoria: {categoria}</p>
        <Link to={`/item/${id}`} className="ver-mas">Ver mas</Link>
      </div>
    </div>
    // <Card style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src={imagen} />
    //   <Card.Body>
    //     <Card.Title> {titulo} </Card.Title>
    //     <Card.Text>
    //      Categoria: {categoria}
    //     </Card.Text>
    //     <Card.Text>
    //       Precio: ${precio}
    //     </Card.Text>
    //     <Button variant="danger" href={`/item/${id}`} >Ver más</Button>
    //   </Card.Body>
    // </Card>
  );
}

export default Item;



// const Item = ( {productos} ) => {
//   return (

//     <div className="producto">
//         <img src={productos.imagen} alt='img' />
//         <div>
//             <p>{productos.titulo}</p>
//             <p>  <strong>Precio: ${productos.precio} </strong></p>
//             <p>  Categoria: {productos.categoria.nombre} </p>
            
//         </div>
//     </div>

//   )

// }

// export default Item