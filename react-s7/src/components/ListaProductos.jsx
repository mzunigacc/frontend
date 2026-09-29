import Producto from "./Producto";

function ListaProductos({ productos, agregarAlCarrito }) {
    return (
        <section className="container my-5">

            <h2 className="text-center mb-4">
                Catálogo de videojuegos
            </h2>

            <div className="row g-4">
                {productos.map((producto) => (
                    <Producto
                        key={producto.id}
                        producto={producto}
                        agregarAlCarrito={agregarAlCarrito}
                    />
                ))}
            </div>

        </section>
    );
}

export default ListaProductos;
