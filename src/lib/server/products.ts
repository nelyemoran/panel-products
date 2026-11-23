export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
}
// Array de productos
const products: Product[] = [
    {
        id: 1,
        name: "Laptop",
        category: "Electrónica",
        price: 2000000,
        stock: 10
    },
    {
        id: 2,
        name: "Libro de Matemáticas",
        category: "Educación",
        price: 20000,
        stock: 50
    },
    {
        id: 3,
        name: "Camiseta",
        category: "Ropa",
        price: 10000,
        stock: 100
    },
    {
        id: 4,
        name: "Zapatos",
        category: "Ropa",
        price: 50000,
        stock: 30
    },
    {
        id: 5,
        name: "Teléfono",
        category: "Electrónica",
        price: 1500000,
        stock: 20
    },
    {
        id: 6,
        name: "Auriculares",
        category: "Electrónica",
        price: 50000,
        stock: 25
    },
    {
        id: 7,
        name: "Bolso",
        category: "Accesorios",
        price: 80000,
        stock: 15       
    },
    {
        id: 8,
        name: "Reloj",
        category: "Accesorios",
        price: 100000,
        stock: 10
    },
    {
        id: 9,
        name: "Silla de Oficina",
        category: "Muebles",
        price: 200000,
        stock: 5
    },
    {
        id: 10,
        name: "Mesa de Comedor",
        category: "Muebles",
        price: 700000,
        stock: 3
    }
]

// Función para obtener todos los productos
export function getProducts(): Product[]{
    return [...products];
}
