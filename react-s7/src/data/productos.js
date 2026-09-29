const base = import.meta.env.BASE_URL;

const productos = [
    {
        id: 1,
        nombre: "Hollow Knight: Silksong",
        descripcion: "Explora un nuevo reino en una aventura de acción y plataformas.",
        precioNormal: 29990,
        precioOferta: 24990,
        imagen: `${base}img/silksong.jpg`
    },
    {
        id: 2,
        nombre: "The Witcher 3: Wild Hunt",
        descripcion: "Explora un mundo abierto como Geralt de Rivia, un brujo cazador de monstruos.",
        precioNormal: 39990,
        precioOferta: 29990,
        imagen: `${base}img/thewitcher.jpg`
    },
    {
        id: 3,
        nombre: "Mass Effect Legendary Edition",
        descripcion: "Entra a la batalla por el universo en la trilogía de Mass Effect.",
        precioNormal: 44990,
        precioOferta: 34990,
        imagen: `${base}img/masseffect.jpg`
    }
];

export default productos;
