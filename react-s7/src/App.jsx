import { useState } from "react";
import Header from "./components/Header";
import ListaProductos from "./components/ListaProductos";
import Carrito from "./components/Carrito";
import productos from "./data/productos";
import "./App.css";

function App() {

    // Estado que almacena los productos agregados al carrito.
    const [carrito, setCarrito] = useState([]);

    // Agrega un producto nuevo o aumenta su cantidad si ya existe.
    function agregarAlCarrito(producto) {
        const productoExistente = carrito.find(
            (item) => item.id === producto.id
        );

        if (productoExistente) {
            setCarrito(
                carrito.map((item) =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                )
            );
        } else {
            setCarrito([
                ...carrito,
                { ...producto, cantidad: 1 }
            ]);
        }
    }

    // Elimina completamente un producto del carrito.
    function eliminarDelCarrito(id) {
        setCarrito(
            carrito.filter((producto) => producto.id !== id)
        );
    }

    return (
        <>
            <Header />

            <main>
                <ListaProductos
                    productos={productos}
                    agregarAlCarrito={agregarAlCarrito}
                />

                <Carrito
                    carrito={carrito}
                    eliminarDelCarrito={eliminarDelCarrito}
                />
            </main>
        </>
    );
}

export default App;
