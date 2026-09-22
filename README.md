# Desarrollo Frontend I - PFY2201

Repositorio académico utilizado para el desarrollo progresivo de las actividades de la asignatura **Desarrollo Frontend I (PFY2201)**.

El proyecto corresponde a una tienda ficticia de videojuegos denominada **Tienda Gamer**, construida incrementalmente durante las distintas semanas de la asignatura.

---

## Semana 6 - Integración de Bootstrap, DOM, eventos y Fetch API

Durante la Semana 6 se integraron y optimizaron las funcionalidades desarrolladas durante las semanas anteriores, consolidando una página eCommerce responsiva con **Bootstrap 5**, manipulación dinámica del **DOM**, eventos de usuario, carga de datos mediante **Fetch API**, búsqueda de productos y carrito de compras.

### Implementaciones principales

- Reorganización de los recursos del proyecto dentro de la carpeta `assets/`.
- Mantención del diseño responsivo mediante Bootstrap 5.
- Navbar responsivo con categorías de productos.
- Incorporación de las categorías `PC` y `Consolas`.
- Filtrado dinámico del catálogo mediante las categorías del Navbar.
- Restauración del catálogo completo mediante la opción `Productos`.
- Incorporación de un formulario de búsqueda de videojuegos.
- Procesamiento del formulario mediante el evento `submit`.
- Uso de `preventDefault()` para controlar la búsqueda mediante JavaScript.
- Carga del catálogo desde un archivo JSON local mediante Fetch API.
- Incorporación de un indicador de carga durante la solicitud de datos.
- Generación dinámica de tarjetas de productos mediante manipulación del DOM.
- Incorporación dinámica de imágenes, nombres, plataformas y precios.
- Incorporación de botones para agregar productos al carrito.
- Implementación del evento `click` para agregar productos.
- Generación dinámica del resumen del carrito.
- Agrupación de productos repetidos mediante cantidades.
- Cálculo dinámico del total del carrito.
- Manejo de errores de carga mediante `.catch()`.
- Mensaje amigable cuando el catálogo no puede ser cargado.
- Registro del detalle técnico del error mediante `console.error()`.
- Organización del código JavaScript mediante funciones reutilizables.
- Mantención de comentarios descriptivos en las funciones principales.
- Validación del funcionamiento mediante GitHub Pages.

### Catálogo mediante Fetch API

Los productos utilizados por la aplicación se encuentran almacenados en:

```text
assets/data/productos.json
```

La carga del catálogo sigue el siguiente flujo:

```text
productos.json
      │
      ▼
  Fetch API
      │
      ▼
response.json()
      │
      ▼
productosDisponibles
      │
      ▼
mostrarProductos()
      │
      ▼
     DOM
```

Mientras se realiza la solicitud se muestra un indicador de carga.

Si el archivo no puede ser obtenido, la aplicación muestra un mensaje amigable al usuario y registra el detalle técnico del error en la consola.

### Búsqueda de productos

Se incorporó un formulario que permite buscar videojuegos por nombre.

El formulario utiliza el evento `submit` y `preventDefault()` para procesar la búsqueda mediante JavaScript sin recargar la página.

```text
Formulario
    │
    ▼
  submit
    │
    ▼
filter()
    │
    ▼
mostrarProductos()
```

Cuando no existen coincidencias se informa al usuario mediante un mensaje dinámico.

### Categorías

La barra de navegación incorpora las categorías:

- `PC`
- `Consolas`

Cada categoría utiliza un evento `click` para filtrar los productos cargados desde el archivo JSON.

La opción `Productos` permite restablecer el catálogo completo.

### Carrito de compras

Cada producto generado dinámicamente incluye un botón:

```text
Agregar al carrito
```

Al seleccionar un producto se ejecuta un evento `click` que actualiza el carrito mediante manipulación del DOM.

El flujo implementado es:

```text
Producto
    │
    ▼
   click
    │
    ▼
agregarAlCarrito()
    │
    ▼
mostrarCarrito()
    │
    ├── Producto
    ├── Cantidad
    └── Total
```

Cuando un producto es agregado más de una vez, el carrito agrupa las unidades utilizando una cantidad:

```text
The Witcher 3: Wild Hunt x2
```

El total del carrito se recalcula dinámicamente después de cada interacción.

### Diseño responsivo

La interfaz mantiene el sistema responsivo implementado mediante Bootstrap 5.

La distribución del catálogo utiliza:

- `col-12`
- `col-md-6`
- `col-lg-4`

Esto permite adaptar los productos según el tamaño de pantalla:

| Resolución | Distribución |
|---|---|
| Móvil | 1 producto por fila |
| Tablet | 2 productos por fila |
| Escritorio | 3 productos por fila |

El Navbar utiliza el componente colapsable de Bootstrap y muestra un botón hamburguesa en resoluciones menores.

También se validó el comportamiento responsivo del formulario de búsqueda, catálogo, carrito, Carousel y Footer.

---

## Evidencias Semana 6

Se realizaron pruebas funcionales para comprobar las características incorporadas durante la Semana 6.

Las evidencias permiten verificar:

- Funcionamiento del catálogo generado mediante Fetch API.
- Visualización dinámica de imágenes, nombres y precios.
- Funcionamiento del formulario de búsqueda.
- Filtrado de productos por nombre.
- Filtrado mediante las categorías `PC` y `Consolas`.
- Funcionamiento del evento `click`.
- Incorporación de productos al carrito.
- Agrupación de productos repetidos mediante cantidades.
- Cálculo dinámico del total.
- Manejo de errores durante la carga del archivo JSON.
- Comportamiento responsivo de la aplicación.
- Funcionamiento del proyecto desplegado mediante GitHub Pages.

Las capturas correspondientes se encuentran almacenadas en la carpeta `evidencias/`.

---

## Semana 5 - Manipulación del DOM e interactividad con JavaScript

Durante la Semana 5 se incorporó **JavaScript** al proyecto desarrollado durante las semanas anteriores, agregando manipulación dinámica del DOM, eventos de usuario y carga de datos mediante la **Fetch API**.

### Implementaciones principales

- Incorporación de un archivo JavaScript externo.
- Selección y manipulación de elementos del DOM.
- Creación dinámica de elementos mediante `createElement()`.
- Incorporación de elementos al DOM mediante `appendChild()`.
- Creación dinámica de una tarjeta de oferta semanal.
- Implementación del evento `click`.
- Implementación del evento `mouseover`.
- Implementación del evento `mouseout`.
- Implementación del evento `submit`.
- Uso de `preventDefault()` para controlar el envío del formulario.
- Modificación dinámica de contenido mediante `textContent`.
- Incorporación de un formulario de contacto interactivo.
- Uso de la Fetch API para obtener información desde un archivo JSON.
- Conversión de la respuesta obtenida mediante `response.json()`.
- Generación dinámica de productos a partir de los datos obtenidos.
- Manejo de promesas mediante `.then()`.
- Manejo de errores mediante `.catch()`.
- Organización del código JavaScript mediante funciones con responsabilidades específicas.
- Incorporación de comentarios en las funciones principales.

### Manipulación del DOM

JavaScript genera dinámicamente una sección de oferta semanal utilizando:

```javascript
document.createElement()
appendChild()
```

La tarjeta creada permite demostrar la modificación del DOM sin mantener todo su contenido definido directamente en el archivo HTML.

### Eventos implementados

Se incorporaron distintos eventos para mejorar la interactividad de la página:

| Evento | Comportamiento |
|---|---|
| `click` | Modifica el mensaje de la oferta semanal |
| `mouseover` | Aumenta ligeramente el tamaño de la tarjeta |
| `mouseout` | Devuelve la tarjeta a su tamaño original |
| `submit` | Procesa el formulario y muestra un mensaje de confirmación |

El formulario utiliza `preventDefault()` para evitar el comportamiento predeterminado del envío y permitir que JavaScript controle la interacción.

### Fetch API

Se incorporó un catálogo adicional cuyos datos eran obtenidos desde el archivo `productos.json`.

La carga de información seguía el siguiente flujo:

```text
productos.json
      │
      ▼
   Fetch API
      │
      ▼
 response.json()
      │
      ▼
mostrarProductos()
      │
      ▼
     DOM
```

Los datos obtenidos eran procesados mediante JavaScript y cada producto era incorporado dinámicamente a la página utilizando elementos creados mediante `createElement()` y `appendChild()`.

También se implementó manejo de errores mediante `.catch()` en caso de que el recurso no pudiera ser cargado.

---

## Evidencias Semana 5

Se realizaron pruebas para comprobar las funcionalidades incorporadas mediante JavaScript.

Las capturas correspondientes se encuentran almacenadas en la carpeta `evidencias/`:

- `semana5-dom-evento-click.png`
- `semana5-submit.png`
- `semana5-fetch.png`

Las pruebas permiten verificar:

- Creación dinámica de contenido mediante JavaScript.
- Funcionamiento del evento `click`.
- Funcionamiento del evento `mouseover`.
- Procesamiento del evento `submit`.
- Modificación dinámica del contenido.
- Carga de datos mediante Fetch API.
- Generación dinámica del catálogo desde un archivo JSON.
- Funcionamiento del proyecto desplegado mediante GitHub Pages.

---

## Semana 4 - Diseño responsivo con Bootstrap 5

Durante la Semana 4 se incorporó **Bootstrap 5** al proyecto desarrollado durante las semanas anteriores, utilizando sus componentes y sistema de cuadrículas para complementar el diseño responsivo existente.

### Implementaciones principales

- Integración de Bootstrap 5 mediante CDN.
- Incorporación de JavaScript de Bootstrap mediante `bootstrap.bundle`.
- Implementación de una barra de navegación (`Navbar`) responsiva.
- Menú colapsable mediante botón hamburguesa en resoluciones menores.
- Implementación de un `Carousel` para productos destacados.
- Transición automática del Carousel cada 3 segundos.
- Controles manuales para avanzar y retroceder en el Carousel.
- Implementación del sistema Grid de Bootstrap.
- Distribución responsiva de productos mediante:
  - `col-12`
  - `col-md-6`
  - `col-lg-4`
- Migración de los productos existentes a componentes `Card` de Bootstrap.
- Uso de utilidades de Bootstrap para espaciado, dimensiones y presentación.
- Mantención de estilos personalizados mediante CSS.
- Ajustes responsivos adicionales para imágenes del Carousel y Cards.
- Incorporación de atributos de accesibilidad en los componentes interactivos.

### Comportamiento responsivo

La distribución de productos se adapta al tamaño de pantalla:

| Resolución | Distribución |
|---|---|
| Móvil | 1 producto por fila |
| Tablet | 2 productos por fila |
| Escritorio | 3 productos por fila |

El Navbar también modifica su comportamiento según el tamaño disponible, mostrando un menú colapsable en resoluciones menores.

---

## Evidencias Semana 4

Se realizaron pruebas en tres tamaños de pantalla para comprobar el comportamiento responsivo de la interfaz:

- Vista móvil.
- Vista tablet.
- Vista escritorio.

Las capturas correspondientes se encuentran almacenadas en la carpeta `evidencias/`.

Las pruebas permiten verificar:

- Funcionamiento responsivo del Navbar.
- Funcionamiento del botón hamburguesa.
- Funcionamiento automático del Carousel.
- Intervalo de transición de 3 segundos.
- Controles manuales del Carousel.
- Adaptación del sistema Grid.
- Distribución responsiva de las Cards.

---

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- JSON
- Fetch API
- Bootstrap 5
- Git
- GitHub
- GitHub Pages

---

## Estructura del proyecto

```text
frontend/
├── assets/
│   ├── css/
│   │   ├── Matias_Zuniga_PFY2201_CSS_Semana2.css
│   │   ├── Matias_Zuniga_PFY2201_CSS_Semana3.css
│   │   └── Matias_Zuniga_PFY2201_CSS_Semana4.css
│   ├── data/
│   │   └── productos.json
│   ├── img/
│   │   ├── masseffect.jpg
│   │   ├── silksong.jpg
│   │   └── thewitcher.jpg
│   └── js/
│       ├── Matias_Zuniga_PFY2201_DOM_Semana5.js
│       └── Matias_Zuniga_PFY2201_DOM_Semana6.js
├── evidencias/
├── index.html
└── README.md
```

---

## Control de versiones

El desarrollo se mantiene mediante Git y GitHub.

Cada semana de trabajo se integra progresivamente al proyecto y su estado final se identifica mediante tags de entrega.

El estado final de la Semana 4 se identifica mediante:

```text
s4-entrega
```

El estado funcional de la Semana 5 se identifica mediante:

```text
s5-entrega
```

El estado final de la Semana 6 se identifica mediante:

```text
s6-entrega
```

La versión pública del proyecto se mantiene mediante GitHub Pages desde la rama `main`.

---

## Proyecto publicado

La aplicación se encuentra desplegada públicamente mediante GitHub Pages:

https://mzunigacc.github.io/frontend/