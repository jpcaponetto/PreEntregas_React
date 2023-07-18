import { useEffect, useState } from "react";
import { buscarProductos } from "../BuscarProductos/buscarProductos";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const category = useParams().category;

    useEffect(() => {
        buscarProductos()
            .then((res) => {
                if (category){
                    setProductos(res.filter((prod)=> prod.category === category));
                } else{
                    setProductos(res);
                }
            })
    }, [category])
    

    return (
        <div> 
           <ItemList productos={productos}/>
        </div> 
    )
}
export default ItemListContainer