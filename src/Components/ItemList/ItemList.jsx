import React from 'react'
import Item from '../Item/Item'

const ItemList = ( {productos} ) => {
  return (
    <div>
        <div className="productos container">
            {productos.map((prod) => <Item productos={prod} key={prod.id} />)}
        </div>
    </div>
  )
}

export default ItemList