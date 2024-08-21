class AllProducts {
    id: number;
    name: string;
    quantity: number;
    unit: string;
    price: number;
    url: string;

    constructor(id: number, name: string, quantity: number, unit: string, price: number, url: string) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.unit = unit;
        this.price = price;
        this.url = url;
    }
}

export default AllProducts;