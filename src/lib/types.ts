export  interface ProductType {
    id: number;
    image: string;
    name: string;
    category: string;
    price: number;
}

export interface CartItemType extends ProductType {
    quantity: number;
}