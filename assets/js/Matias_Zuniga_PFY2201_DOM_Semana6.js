// Almacena los productos cargados desde el archivo JSON.
let productosDisponibles = [];

// Almacena los productos agregados al carrito.
let carrito = [];


// Formatea precios utilizando moneda chilena.
function formatearPrecio(precio) {
    return precio.toLocaleString("es-CL");
}


// Crea un producto destacado dinámicamente y lo agrega al DOM.
function crearProductoDinamico() {
    const contenedor = document.getElementById("productoDinamico");

    const producto = document.createElement("div");
    producto.className = "card bg-dark text-light border-secondary p-3";

    const titulo = document.createElement("h3");
    titulo.textContent = "Oferta de la semana";

    const descripcion = document.createElement("p");
    descripcion.textContent =
        "Descubre nuestra selección especial de videojuegos.";

    const boton = document.createElement("button");
    boton.textContent = "Ver oferta";
    boton.className = "btn btn-primary";
    boton.id = "btnOferta";

    producto.appendChild(titulo);
    producto.appendChild(descripcion);
    producto.appendChild(boton);

    // Evento click: cambia el contenido de la oferta.
    boton.addEventListener("click", function () {
        descripcion.textContent =
            "¡Oferta activada! 20% de descuento en juegos seleccionados.";
    });

    // Evento mouseover: destaca visualmente la tarjeta.
    producto.addEventListener("mouseover", function () {
        producto.style.transform = "scale(1.02)";
    });

    // Evento mouseout: devuelve la tarjeta a su tamaño original.
    producto.addEventListener("mouseout", function () {
        producto.style.transform = "scale(1)";
    });

    contenedor.appendChild(producto);
}


// Muestra en el DOM los productos recibidos.
function mostrarProductos(productos) {
    const catalogo = document.getElementById("catalogoFetch");

    // Limpia el catálogo antes de mostrar nuevos resultados.
    catalogo.innerHTML = "";

    productos.forEach(function (producto) {
        const columna = document.createElement("div");
        columna.className = "col-12 col-md-6 col-lg-4";

        const tarjeta = document.createElement("div");
        tarjeta.className =
            "card h-100 bg-dark text-light border-secondary";

        const imagen = document.createElement("img");
        imagen.src = producto.imagen;
        imagen.alt = "Portada de " + producto.nombre;
        imagen.className = "card-img-top";

        const cuerpo = document.createElement("div");
        cuerpo.className = "card-body d-flex flex-column";

        const titulo = document.createElement("h3");
        titulo.className = "card-title";
        titulo.textContent = producto.nombre;

        const plataforma = document.createElement("p");
        plataforma.className = "card-text";
        plataforma.textContent =
            "Plataforma: " + producto.plataforma;

        const precio = document.createElement("p");
        precio.className = "card-text fw-bold";
        precio.textContent =
            "Precio: $" + formatearPrecio(producto.precio);

        const boton = document.createElement("button");
        boton.className = "btn btn-primary mt-auto";
        boton.textContent = "Agregar al carrito";

        // Evento click: agrega el producto seleccionado al carrito.
        boton.addEventListener("click", function () {
            agregarAlCarrito(producto.id);
        });

        cuerpo.appendChild(titulo);
        cuerpo.appendChild(plataforma);
        cuerpo.appendChild(precio);
        cuerpo.appendChild(boton);

        tarjeta.appendChild(imagen);
        tarjeta.appendChild(cuerpo);

        columna.appendChild(tarjeta);
        catalogo.appendChild(columna);
    });
}


// Agrega un producto al carrito utilizando su identificador.
function agregarAlCarrito(idProducto) {
    const producto = productosDisponibles.find(function (producto) {
        return producto.id === idProducto;
    });

    if (producto) {
        carrito.push(producto);
        mostrarCarrito();
    }
}


// Actualiza dinámicamente el resumen del carrito.
function mostrarCarrito() {
    const lista = document.getElementById("listaCarrito");
    const carritoVacio = document.getElementById("carritoVacio");
    const totalCarrito = document.getElementById("totalCarrito");

    lista.innerHTML = "";

    if (carrito.length === 0) {
        carritoVacio.style.display = "block";
        totalCarrito.textContent = "Total: $0";
        return;
    }

    carritoVacio.style.display = "none";

    let total = 0;

    // Obtiene los productos únicos agregados al carrito.
    const productosUnicos = [];

    carrito.forEach(function (producto) {
        if (!productosUnicos.includes(producto.id)) {
            productosUnicos.push(producto.id);
        }

        total += producto.precio;
    });


    // Muestra cada producto junto con su cantidad.
    productosUnicos.forEach(function (idProducto) {
        const producto = carrito.find(function (producto) {
            return producto.id === idProducto;
        });

        const cantidad = carrito.filter(function (producto) {
            return producto.id === idProducto;
        }).length;

        const item = document.createElement("p");

        item.textContent =
            producto.nombre +
            " x" +
            cantidad +
            " - $" +
            formatearPrecio(producto.precio * cantidad);

        lista.appendChild(item);
    });


    totalCarrito.textContent =
        "Total: $" + formatearPrecio(total);
}


// Configura el formulario de búsqueda de productos.
function configurarBusqueda() {
    const formulario = document.getElementById("formBusqueda");
    const campoBusqueda = document.getElementById("busqueda");
    const mensaje = document.getElementById("mensajeBusqueda");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const textoBusqueda =
            campoBusqueda.value.trim().toLowerCase();

        // Si la búsqueda está vacía, vuelve a mostrar todo el catálogo.
        if (textoBusqueda === "") {
            mensaje.textContent = "";
            mostrarProductos(productosDisponibles);
            return;
        }

        const resultados = productosDisponibles.filter(function (producto) {
            return producto.nombre
                .toLowerCase()
                .includes(textoBusqueda);
        });

        if (resultados.length === 0) {
            mensaje.textContent =
                "No se encontraron videojuegos con ese nombre.";

            mostrarProductos([]);
        } else {
            mensaje.textContent =
                "Se encontraron " +
                resultados.length +
                " producto(s).";

            mostrarProductos(resultados);
        }
    });
}


// Configura las categorías de la barra de navegación.
function configurarCategorias() {
    const mostrarTodos = document.getElementById("mostrarTodos");
    const categoriaPC = document.getElementById("categoriaPC");
    const categoriaConsolas =
        document.getElementById("categoriaConsolas");

    const mensaje =
        document.getElementById("mensajeBusqueda");

    const campoBusqueda =
        document.getElementById("busqueda");


    // Evento click: restablece el catálogo completo.
    mostrarTodos.addEventListener("click", function () {
        campoBusqueda.value = "";
        mensaje.textContent = "";

        mostrarProductos(productosDisponibles);
    });


    // Evento click: muestra los videojuegos disponibles para PC.
    categoriaPC.addEventListener("click", function () {
        const productosPC =
            productosDisponibles.filter(function (producto) {
                return producto.plataforma.includes("PC");
            });

        campoBusqueda.value = "";
        mensaje.textContent = "Categoría seleccionada: PC.";

        mostrarProductos(productosPC);
    });


    // Evento click: muestra videojuegos disponibles en consolas.
    categoriaConsolas.addEventListener("click", function () {
        const productosConsola =
            productosDisponibles.filter(function (producto) {
                return (
                    producto.plataforma.includes("PlayStation") ||
                    producto.plataforma.includes("Xbox")
                );
            });

        campoBusqueda.value = "";
        mensaje.textContent =
            "Categoría seleccionada: Consolas.";

        mostrarProductos(productosConsola);
    });
}


// Obtiene los productos desde un archivo JSON utilizando Fetch API.
function cargarProductos() {
    const catalogo = document.getElementById("catalogoFetch");

    // Indicador visible mientras se realiza la carga.
    catalogo.innerHTML =
        '<p class="text-center">Cargando productos...</p>';

    fetch("assets/data/productos.json")
        .then(function (respuesta) {
            if (!respuesta.ok) {
                throw new Error(
                    "Error HTTP: " + respuesta.status
                );
            }

            return respuesta.json();
        })
        .then(function (productos) {
            productosDisponibles = productos;

            mostrarProductos(productosDisponibles);
        })
        .catch(function (error) {
            catalogo.innerHTML = "";

            const mensajeError =
                document.createElement("p");

            mensajeError.className =
                "text-center text-danger";

            mensajeError.textContent =
                "No fue posible cargar el catálogo. Intenta nuevamente más tarde.";

            catalogo.appendChild(mensajeError);

            console.error(
                "Error al cargar productos:",
                error
            );
        });
}


// Ejecuta las funciones principales al cargar la página.
crearProductoDinamico();
configurarBusqueda();
configurarCategorias();
mostrarCarrito();
cargarProductos();