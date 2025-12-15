export type MenuItem = {
    id: number;
    name: string;
    image: string;
    price: number;
};

export type OrderItem = MenuItem & {
    quantity: number;
};