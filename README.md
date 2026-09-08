# Desarrollo Frontend I - PFY2201

Repositorio académico utilizado para el desarrollo progresivo de las actividades de la asignatura **Desarrollo Frontend I (PFY2201)**.

El proyecto corresponde a una tienda ficticia de videojuegos denominada **Tienda Gamer**, construida incrementalmente durante las distintas semanas de la asignatura.

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
- Bootstrap 5
- Git
- GitHub
- GitHub Pages

---

## Estructura del proyecto

```text
frontend/
├── css/
│   ├── Matias_Zuniga_PFY2201_CSS_Semana2.css
│   ├── Matias_Zuniga_PFY2201_CSS_Semana3.css
│   └── Matias_Zuniga_PFY2201_CSS_Semana4.css
├── evidencias/
├── img/
├── index.html
└── README.md
```

---

## Control de versiones

El desarrollo se mantiene mediante Git y GitHub.

Cada semana de trabajo se desarrolla en una rama independiente antes de integrar su estado final a `main`.

Para la Semana 4 se utilizó la rama:

```text
s4
```

El estado final de la actividad se identifica mediante el tag:

```text
s4-entrega
```

La versión publicada del proyecto se mantiene mediante GitHub Pages.