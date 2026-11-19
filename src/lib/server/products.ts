export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
}

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
    }
]

export function getProducts(): Product[]{
    return [...products];
}
