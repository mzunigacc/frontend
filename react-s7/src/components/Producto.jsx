function Producto({ producto, agregarAlCarrito }) {
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 bg-dark text-light border-secondary">

                <img
                    src={producto.imagen}
                    className="card-img-top producto-imagen"
                    alt={"Portada de " + producto.nombre}
                />

                <div className="card-body d-flex flex-column">

                    <h3 className="card-title fs-4">
                        {producto.nombre}
                    </h3>

                    <p className="card-text">
                        {producto.descripcion}
                    </p>

                    <p className="text-decoration-line-through text-secondary mb-1">
                        Precio normal: ${producto.precioNormal.toLocaleString("es-CL")}
                    </p>

                    <p className="fw-bold">
                        Precio oferta: ${producto.precioOferta.toLocaleString("es-CL")}
                    </p>

                    <button
                        className="btn btn-primary mt-auto"
                        onClick={() => agregarAlCarrito(producto)}
                    >
                        Agregar al carrito
                    </button>

                </div>
            </div>
        </div>
    );
}

export default Producto;
