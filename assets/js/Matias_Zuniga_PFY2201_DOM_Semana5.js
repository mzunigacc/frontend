// Crea un producto destacado dinámicamente y lo agrega al DOM.
function crearProductoDinamico() {
    const contenedor = document.getElementById("productoDinamico");

    const producto = document.createElement("div");
    producto.className = "card bg-dark text-light border-secondary p-3";

    const titulo = document.createElement("h3");
    titulo.textContent = "Oferta de la semana";

    const descripcion = document.createElement("p");
    descripcion.textContent = "Descubre nuestra selección especial de videojuegos.";

    const boton = document.createElement("button");
    boton.textContent = "Ver oferta";
    boton.className = "btn btn-primary";
    boton.id = "btnOferta";

    producto.appendChild(titulo);
    producto.appendChild(descripcion);
    producto.appendChild(boton);

    // Evento click: cambia el contenido de la oferta.
    boton.addEventListener("click", function () {
        descripcion.textContent = "¡Oferta activada! 20% de descuento en juegos seleccionados.";
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


// Configura el formulario de contacto y muestra un mensaje al enviarlo.
function configurarFormulario() {
    const formulario = document.getElementById("formContacto");
    const nombre = document.getElementById("nombre");
    const mensaje = document.getElementById("mensajeFormulario");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        mensaje.textContent = "Gracias, " + nombre.value + ". Tu consulta fue enviada.";

        formulario.reset();
    });
}


// Muestra en el DOM los productos obtenidos desde el archivo JSON.
function mostrarProductos(productos) {
    const catalogo = document.getElementById("catalogoFetch");

    productos.forEach(function (producto) {
        const columna = document.createElement("div");
        columna.className = "col-12 col-md-6 col-lg-4";

        const tarjeta = document.createElement("div");
        tarjeta.className = "card h-100 bg-dark text-light border-secondary p-3";

        const titulo = document.createElement("h3");
        titulo.textContent = producto.nombre;

        const plataforma = document.createElement("p");
        plataforma.textContent = "Plataforma: " + producto.plataforma;

        const precio = document.createElement("p");
        precio.textContent = "Precio: $" + producto.precio.toLocaleString("es-CL");

        tarjeta.appendChild(titulo);
        tarjeta.appendChild(plataforma);
        tarjeta.appendChild(precio);

        columna.appendChild(tarjeta);
        catalogo.appendChild(columna);
    });
}


// Obtiene los productos desde un archivo JSON utilizando Fetch API.
function cargarProductos() {
    fetch("productos.json")
        .then(function (respuesta) {
            if (!respuesta.ok) {
                throw new Error("No fue posible cargar los productos.");
            }

            return respuesta.json();
        })
        .then(function (productos) {
            mostrarProductos(productos);
        })
        .catch(function (error) {
            const catalogo = document.getElementById("catalogoFetch");
            catalogo.textContent = "Error al cargar el catálogo.";

            console.error(error);
        });
}


// Ejecuta las funciones principales al cargar la página.
crearProductoDinamico();
configurarFormulario();
cargarProductos();