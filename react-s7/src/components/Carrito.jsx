function Carrito({ carrito, eliminarDelCarrito }) {

    const cantidadTotal = carrito.reduce(
        (total, producto) => total + producto.cantidad,
        0
    );

    const precioTotal = carrito.reduce(
        (total, producto) =>
            total + producto.precioOferta * producto.cantidad,
        0
    );

    return (
        <section className="container my-5">

            <h2 className="text-center">
                Carrito de compras
            </h2>

            <div className="card bg-dark text-light border-secondary p-3 mt-4">

                {carrito.length === 0 ? (
                    <p className="mb-0">
                        El carrito está vacío.
                    </p>
                ) : (
                    <>
                        {carrito.map((producto) => (
                            <div
                                key={producto.id}
                                className="d-flex justify-content-between align-items-center border-bottom py-2"
                            >
                                <span>
                                    {producto.nombre} - ${producto.precioOferta.toLocaleString("es-CL")} × {producto.cantidad}
                                </span>

                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => eliminarDelCarrito(producto.id)}
                                >
                                    Eliminar
                                </button>
                            </div>
                        ))}

                        <p className="mt-3 mb-1">
                            Productos en el carrito: {cantidadTotal}
                        </p>

                        <p className="fw-bold mb-0">
                            Total: ${precioTotal.toLocaleString("es-CL")}
                        </p>
                    </>
                )}

            </div>

        </section>
    );
}

export default Carrito;
