import productos from "../Productos/productos.json"

export const buscarProductos = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 500);
    })
}

export const pedirItemId = (id) => {
    return new Promise ((resolve, reject) => {

        const item = productos.find ((el) => el.id === id);

        if (item){
            resolve(item)
        } else {
            reject({
                error: "No se encontró ningun producto"
            })
        }

    })
}